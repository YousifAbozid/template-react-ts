# Git Hooks Quality Gate - Quick Reference

## 🎯 Two-Stage Quality System

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  STAGE 1: PRE-COMMIT (Fast Local Check)                       │
│  ⚡ 2-5 seconds                                                 │
│                                                                 │
│  Staged Files Only                                             │
│  ├─ 📝 ESLint (auto-fix)                                       │
│  ├─ 💅 Prettier (format)                                       │
│  └─ 🔍 TypeScript (type-check)                                 │
│                                                                 │
│  ❌ Blocks if: Unfixable ESLint errors, Type errors            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ⬇️
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  STAGE 2: PRE-PUSH (Comprehensive Quality Gate)               │
│  🛡️  10-30 seconds                                              │
│                                                                 │
│  Entire Codebase                                               │
│  ├─ 📝 ESLint (full check + auto-fix)                          │
│  ├─ 💅 Prettier (full format)                                  │
│  ├─ 🔍 TypeScript (full type-check)                            │
│  └─ 🏗️  Production Build (catch breaking changes)              │
│                                                                 │
│  ❌ Blocks if: Any errors, Build fails                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ⬇️
                    🚀 PUSH TO REMOTE 🚀
```

---

## 🚦 Quick Commands

| Command              | What It Does                           | When to Use           |
| -------------------- | -------------------------------------- | --------------------- |
| `npm run fix-all`    | Auto-fix ESLint + format with Prettier | Before committing     |
| `npm run lint`       | Check for ESLint errors                | To see linting issues |
| `npm run lint:fix`   | Auto-fix ESLint issues                 | To fix linting        |
| `npm run format`     | Format all code with Prettier          | To format everything  |
| `npm run type-check` | Run TypeScript type checking           | To check types        |
| `npm run test`       | Run all checks (format + lint + type)  | Before pushing        |
| `npm run build`      | Build for production                   | To test build         |

---

## 🎬 Common Workflows

### ✅ Normal Commit Flow

```bash
# 1. Make changes
vim src/components/Button.tsx

# 2. Stage
git add .

# 3. Commit (pre-commit runs automatically)
git commit -m "feat: add button component"
# ✅ Auto-fixes applied, commit succeeds!
```

### ⚠️ Commit Fails

```bash
# Pre-commit failed with errors
git commit -m "feat: add button"
# ❌ TypeScript type errors found!

# Fix it
npm run fix-all           # Auto-fix what's possible
# Manually fix remaining issues
git add .
git commit -m "feat: add button"
# ✅ Success!
```

### 🚀 Push Flow

```bash
# 1. Push (pre-push runs automatically)
git push origin main
# ✅ Runs: ESLint, Prettier, TypeScript, Build
# 🎉 If all pass, push succeeds!

# 2. If auto-fixes were applied
# You'll be prompted to stage changes
Would you like to stage these changes now? (y/N): y
# Then:
git commit --amend --no-edit
git push origin main
```

---

## 🚨 Emergency: Skip Hooks (NOT RECOMMENDED!)

```bash
# Skip pre-commit (dangerous!)
git commit --no-verify -m "emergency fix"

# Skip pre-push (very dangerous!)
git push --no-verify

# ⚠️ WARNING: Only use in true emergencies!
# You bypass all quality checks and risk pushing broken code!
```

---

## 🎨 What Gets Checked?

### Pre-Commit (Staged Files Only)

- ✅ ESLint rules (auto-fixes applied)
- ✅ Prettier formatting (auto-applied)
- ✅ TypeScript types (incremental check)
- ❌ React hooks rules
- ❌ Import/export errors
- ❌ Unused variables (warnings only)

### Pre-Push (Full Codebase)

- ✅ All of pre-commit checks
- ✅ Production build validation
- ✅ Cross-file type checking
- ✅ All imports resolve correctly
- ✅ No circular dependencies
- ✅ Bundle compiles successfully

---

## 💡 Pro Tips

1. **Run `npm run fix-all` before large commits** - Saves time on pre-commit
2. **Commit often** - Smaller changes = faster checks
3. **Don't skip hooks** - They protect production
4. **Review auto-fixes** - Know what changed
5. **Use caching** - Subsequent runs are much faster

---

## 🎯 Goal

**Never push broken code to production!** 🚀

Every commit is clean, formatted, and type-safe.
Every push is production-ready and builds successfully.

---

For detailed documentation, see: [GIT_HOOKS_WORKFLOW.md](./GIT_HOOKS_WORKFLOW.md)
