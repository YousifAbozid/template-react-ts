import { useState, useEffect, useCallback } from 'react';

// Get encryption secret from environment variables
// Falls back to a default value if the env var is not available (development only)
const ENCRYPTION_SECRET: string =
  (import.meta.env.VITE_ENCRYPTION_SECRET as string | undefined) ||
  'dev-fallback-key-not-for-production';

/**
 * Hook for storing and retrieving data from localStorage (plain text)
 * @param key - Storage key
 * @param initialValue - Default value if none exists
 * @returns [storedValue, setValue, removeValue]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prevValue: T) => T)) => void, () => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      // Handle null, undefined, or invalid JSON properly
      if (item === null || item === 'undefined' || item === undefined) {
        return initialValue;
      }

      try {
        return JSON.parse(item) as T;
      } catch {
        // If JSON parsing fails, return the initialValue
        console.error(
          `Error parsing JSON for key "${key}". Returning initial value.`
        );
        return initialValue;
      }
    } catch (error) {
      // If error accessing localStorage, return initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        // Save state
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Function to remove item from localStorage
  const removeValue = useCallback(() => {
    try {
      // Remove from local storage
      window.localStorage.removeItem(key);
      // Reset state to initial value
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Listen for changes to this localStorage key in other windows/tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          // If the key changed in another window, update state
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch (error) {
          console.error(
            `Error parsing localStorage key "${key}" from storage event:`,
            error
          );
        }
      } else if (e.key === key && e.newValue === null) {
        // If the key was removed in another window, reset state
        setStoredValue(initialValue);
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Remove event listener on cleanup
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}

/**
 * Hook for storing and retrieving encrypted data from localStorage
 * Uses Web Crypto API for strong encryption
 * @param key - Storage key
 * @param initialValue - Default value if none exists
 * @returns [storedValue, setValue, removeValue, isLoading, error]
 */
export function useSecureStorage(
  key: string,
  initialValue: string = ''
): [
  string,
  (value: string) => Promise<void>,
  () => void,
  boolean,
  Error | null
] {
  const [storedValue, setStoredValue] = useState<string>(initialValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Function to encrypt data using Web Crypto API
  const encryptData = useCallback(async (text: string): Promise<string> => {
    try {
      // Convert encryption key to bytes
      const encoder = new TextEncoder();
      const secretKeyData = encoder.encode(ENCRYPTION_SECRET);

      // Generate random salt and IV
      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      // Import the secret as a raw key
      const importedKey = await window.crypto.subtle.importKey(
        'raw',
        secretKeyData,
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
      );

      // Derive an AES-GCM key from the imported key
      const derivedKey = await window.crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt,
          iterations: 100000,
          hash: 'SHA-256'
        },
        importedKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt']
      );

      // Encrypt the data
      const dataToEncrypt = encoder.encode(text);
      const encryptedData = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        derivedKey,
        dataToEncrypt
      );

      // Combine salt, IV, and encrypted data
      const result = new Uint8Array(
        salt.length + iv.length + encryptedData.byteLength
      );
      result.set(salt, 0);
      result.set(iv, salt.length);
      result.set(new Uint8Array(encryptedData), salt.length + iv.length);

      // Convert to base64 for storage
      return btoa(String.fromCharCode(...result));
    } catch (error) {
      console.error('Encryption error:', error);
      throw new Error('Failed to encrypt data');
    }
  }, []);

  // Function to decrypt data using Web Crypto API
  const decryptData = useCallback(
    async (encryptedText: string): Promise<string> => {
      try {
        // Convert base64 back to array buffer
        const encryptedBuffer = Uint8Array.from(atob(encryptedText), c =>
          c.charCodeAt(0)
        );

        // Extract salt, IV, and encrypted data
        const salt = encryptedBuffer.slice(0, 16);
        const iv = encryptedBuffer.slice(16, 28);
        const encryptedData = encryptedBuffer.slice(28);

        // Convert encryption key to bytes
        const encoder = new TextEncoder();
        const secretKeyData = encoder.encode(ENCRYPTION_SECRET);

        // Import the secret as a raw key
        const importedKey = await window.crypto.subtle.importKey(
          'raw',
          secretKeyData,
          { name: 'PBKDF2' },
          false,
          ['deriveKey']
        );

        // Derive the key using the extracted salt
        const derivedKey = await window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt,
            iterations: 100000,
            hash: 'SHA-256'
          },
          importedKey,
          { name: 'AES-GCM', length: 256 },
          false,
          ['decrypt']
        );

        // Decrypt the data
        const decryptedData = await window.crypto.subtle.decrypt(
          { name: 'AES-GCM', iv },
          derivedKey,
          encryptedData
        );

        // Convert decrypted data to string
        const decoder = new TextDecoder();
        return decoder.decode(decryptedData);
      } catch (error) {
        console.error('Decryption error:', error);
        throw new Error('Failed to decrypt data');
      }
    },
    []
  );

  // Load initial value from localStorage
  useEffect(() => {
    async function loadEncryptedValue() {
      setIsLoading(true);
      setError(null);

      try {
        const encryptedValue = window.localStorage.getItem(key);

        if (encryptedValue !== null) {
          const decryptedValue = await decryptData(encryptedValue);
          setStoredValue(decryptedValue);
        } else {
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.error(
          `Error reading encrypted localStorage key "${key}":`,
          error
        );
        setError(error instanceof Error ? error : new Error(String(error)));
        setStoredValue(initialValue);
      } finally {
        setIsLoading(false);
      }
    }

    void loadEncryptedValue();
  }, [key, initialValue, decryptData]);

  // Function to save encrypted value to localStorage
  const setValue = useCallback(
    async (value: string): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        // Update state
        setStoredValue(value);

        // Encrypt and save to localStorage
        const encryptedValue = await encryptData(value);
        window.localStorage.setItem(key, encryptedValue);
      } catch (error) {
        console.error(
          `Error setting encrypted localStorage key "${key}":`,
          error
        );
        setError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setIsLoading(false);
      }
    },
    [key, encryptData]
  );

  // Function to remove from localStorage
  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(
        `Error removing encrypted localStorage key "${key}":`,
        error
      );
      setError(error instanceof Error ? error : new Error(String(error)));
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue, isLoading, error];
}
