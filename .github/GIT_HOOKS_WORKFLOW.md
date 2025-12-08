# Git Hooks Workflow Documentation

## 🎯 Overview

This project uses **Husky** to enforce code quality through automated Git hooks. The workflow ensures that only clean, well-formatted, type-safe, and production-ready code gets committed and pushed.

---

## 🔄 Two-Layer Quality Gate System

### 🚀 **Pre-Commit Hook** (Fast Local Check)

**Purpose**: Quick validation of staged files before committing

**What it does:**

1. ✅ Runs **lint-staged** on staged files only
   - Auto-fixes ESLint issues
   - Formats code with Prettier
2. ✅ Type-checks staged TypeScript files (incremental, fast)
3. ❌ Blocks commit if:
   - ESLint errors that can't be auto-fixed
   - TypeScript type errors

**Why it's fast:**

- Only checks **staged files** (not entire codebase)
- Uses ESLint/TypeScript **caching** for speed
- Incremental type-checking (only changed files)

**Typical execution time**: 2-5 seconds ⚡

---

### 🛡️ **Pre-Push Hook** (Comprehensive Quality Gate)

**Purpose**: Ensure entire codebase is production-ready before pushing

**What it does:**

1. ✅ Detects if source files changed since last push
2. ✅ Runs **ESLint** on entire codebase with auto-fix
3. ✅ Runs **Prettier** on entire codebase
4. ✅ Runs **TypeScript type-check** on full project
5. ✅ Runs **production build** to catch build-breaking changes
6. ❌ Blocks push if:
   - ESLint errors exist
   - TypeScript type errors exist
   - Production build fails

**Why it's thorough:**

- Checks **entire codebase**, not just changed files
- Catches cross-file issues (imports, types, etc.)
- Ensures production build won't break deployment

**Typical execution time**: 10-30 seconds (only when source files changed)

---

## 📋 Available NPM Scripts

### Development Scripts

```bash
npm run dev              # Start development server
npm run build            # Create production build
npm run preview          # Preview production build
```

### Quality Check Scripts

```bash
npm run lint             # Check for ESLint errors
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format all code with Prettier
npm run format:check     # Check if code is formatted
npm run type-check       # Run TypeScript type checking
npm run fix-all          # Run lint:fix + format (recommended!)
npm run test             # Run all checks (format + lint + type-check)
```

### Utility Scripts

```bash
npm run fix-staged       # Run lint-staged manually
npm run upgrade          # Update all dependencies
npm run analyze          # Analyze bundle size
```

---

## 🎬 Workflow Examples

### Example 1: Making a Commit

```bash
# 1. Make your changes
vim src/components/MyComponent.tsx

# 2. Stage your changes
git add src/components/MyComponent.tsx

# 3. Try to commit
git commit -m "feat: add new component"

# What happens automatically:
# ✅ ESLint auto-fixes your code
# ✅ Prettier formats your code
# ✅ TypeScript checks for type errors
# ✅ If all pass → Commit succeeds!
# ❌ If errors exist → Commit blocked, fix manually
```

### Example 2: Fixing Commit Issues

```bash
# If commit fails with errors:

# Option 1: Quick fix (recommended)
npm run fix-all          # Auto-fixes most issues
git add .
git commit -m "feat: add new component"

# Option 2: Manual fix
# - Read the error messages
# - Fix the issues manually
# - Stage and commit again
```

### Example 3: Pushing Changes

```bash
# 1. Commit your changes (pre-commit runs)
git commit -m "feat: add feature"

# 2. Try to push
git push origin main

# What happens automatically:
# ✅ ESLint checks entire codebase (auto-fixes if needed)
# ✅ Prettier formats entire codebase
# ✅ TypeScript checks all files
# ✅ Production build runs
# 🤔 If auto-fixes applied → Prompts you to stage changes
# ✅ If all pass → Push succeeds!
# ❌ If errors exist → Push blocked
```

### Example 4: Handling Pre-Push Auto-Fixes

```bash
git push origin main

# Pre-push applies some auto-fixes...
# You'll see:
# 📝 Auto-fixes were applied to these files:
#    • src/components/Button.tsx
#    • src/utils/helpers.ts
#
# Would you like to stage these changes now? (y/N):

# Option 1: Stage now (recommended)
y  # Press 'y' to stage
git commit --amend --no-edit  # Amend your last commit
git push origin main          # Push again

# Option 2: Review first
n  # Press 'n' to skip
git diff                      # Review the changes
git add .                     # Stage when satisfied
git commit -m "chore: apply auto-fixes"
git push origin main
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "ESLint failed" during commit

**Cause**: ESLint found errors that couldn't be auto-fixed

**Solution**:

```bash
npm run lint          # See the errors
# Fix the errors manually
git add .
git commit -m "fix: resolve linting errors"
```

### Issue 2: "TypeScript type-check failed" during commit

**Cause**: Type errors in your staged files

**Solution**:

```bash
npm run type-check    # See type errors
# Fix the type errors
git add .
git commit -m "fix: resolve type errors"
```

### Issue 3: "Build failed" during push

**Cause**: Your code has build-breaking changes

**Solution**:

```bash
npm run build         # See build errors
# Fix the build errors
npm run fix-all       # Auto-fix what's possible
git add .
git commit -m "fix: resolve build errors"
git push origin main
```

### Issue 4: Pre-push is slow

**Cause**: Full codebase checks take time

**Solutions**:

- ✅ This is expected! It ensures production quality
- ✅ Only runs when source files changed
- ✅ Skips if only docs/configs changed
- 💡 Use `git push --no-verify` ONLY in emergencies (not recommended!)

### Issue 5: Want to skip hooks temporarily

**⚠️ Not recommended, but possible**:

```bash
# Skip pre-commit (dangerous!)
git commit --no-verify -m "message"

# Skip pre-push (very dangerous!)
git push --no-verify
```

**Why it's dangerous**: You bypass all quality checks and might push broken code to production!

---

## 🎨 Code Style Configuration

### ESLint Configuration

- Location: `eslint.config.js`
- Uses TypeScript ESLint with React plugins
- Auto-fixes most issues
- Caching enabled for speed

### Prettier Configuration

- Location: `.prettierrc`
- Single quotes, semicolons, 2-space tabs
- Line width: 80 characters
- LF line endings (cross-platform compatible)

### TypeScript Configuration

- Location: `tsconfig.app.json`
- Strict mode enabled
- Incremental compilation for speed
- Path aliases configured (`@/*`)

---

## 🔧 Maintenance

### Updating Dependencies

```bash
npm run upgrade       # Updates all dependencies
npm install          # Installs updates
npm run test         # Verify everything still works
```

### Disabling Hooks (Not Recommended)

```bash
# Temporarily disable Husky
npx husky uninstall

# Re-enable
npm run prepare
```

---

## 📊 Benefits of This Workflow

✅ **Consistent Code Quality**: All code follows the same standards
✅ **Catch Issues Early**: Problems found before they reach production
✅ **Automated Fixes**: Most issues auto-fixed, less manual work
✅ **Fast Feedback**: Pre-commit is quick (2-5 seconds)
✅ **Production Safety**: Pre-push ensures builds always work
✅ **Team Collaboration**: Everyone follows same quality standards
✅ **CI/CD Ready**: Local checks match deployment checks

---

## 🎓 Best Practices

1. **Commit Often**: Small, focused commits trigger faster checks
2. **Run `npm run fix-all`**: Before committing large changes
3. **Review Auto-Fixes**: Check what was changed before pushing
4. **Don't Skip Hooks**: They exist to protect production
5. **Fix Issues Early**: Don't let type errors accumulate
6. **Use Cache**: ESLint/TypeScript caching makes subsequent runs faster

---

## 🆘 Need Help?

If hooks are failing and you don't understand why:

1. Read the error messages carefully
2. Run individual scripts to isolate the issue:
   - `npm run lint`
   - `npm run type-check`
   - `npm run build`
3. Use `npm run fix-all` to auto-fix common issues
4. Check this documentation for common issues
5. Ask for help from team members

---

## 🎉 Summary

- **Pre-commit**: Fast local check on staged files (ESLint + Prettier + Type-check)
- **Pre-push**: Comprehensive check on entire codebase (ESLint + Prettier + Type-check + Build)
- **Goal**: Never push broken or poorly formatted code
- **Result**: High code quality, fewer production bugs, happier team! 🚀
