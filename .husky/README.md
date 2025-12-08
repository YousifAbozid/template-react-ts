# Git Hooks Documentation

This project uses [Husky](https://typicode.github.io/husky/) to ensure code quality and prevent breaking commits/pushes.

## 🔍 Pre-commit Hook

**When it runs:** Before every `git commit`
**What it does:**

- ✅ Auto-fixes ESLint issues on staged files
- ✅ Formats code with Prettier on staged files
- ✅ Type-checks TypeScript files
- ✅ Auto-stages fixed files

**If it fails:** Your commit is blocked. Fix the issues and try again.

## 🚀 Pre-push Hook

**When it runs:** Before every `git push`
**What it does:**

- ✅ Checks ESLint on entire codebase (no auto-fix)
- ✅ Verifies Prettier formatting on entire codebase
- ✅ Type-checks entire codebase
- ✅ Runs production build to catch build errors

**If it fails:** Your push is blocked. The codebase must be production-ready.

## 🛠️ Manual Commands

Run these locally to fix issues:

```bash
# Fix all auto-fixable issues
npm run fix-all

# Just lint fixes
npm run lint:fix

# Just formatting
npm run format

# Check everything (what pre-push does)
npm run test:ci

# Type check only
npm run type-check
```

## 💡 Tips

- **Before committing:** Run `npm run fix-all` to auto-fix common issues
- **Before pushing:** Run `npm run test:ci` to ensure everything passes
- **Staging fixes:** Hooks automatically stage fixed files for you

## 🔧 Why This Setup?

- **Pre-commit:** Fast, only checks changed files, auto-fixes issues
- **Pre-push:** Comprehensive, checks entire codebase, ensures production readiness
- **No surprises:** If it passes locally, it'll pass in CI/CD
