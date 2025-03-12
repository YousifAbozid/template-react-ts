import React from 'react';
// Linting error: missing semi-colon
const TestComponent = () => {
  // Formatting error: wrong indentation (4 spaces instead of 2)
  const unusedVariable = 'This will trigger a linting warning';
  console.log(
    'This will trigger a no-console warning and double quotes instead of single quotes'
  );
  return <div>Test Component</div>;
};

export default TestComponent;
