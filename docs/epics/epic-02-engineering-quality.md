## Epic 2: Code Quality

### Story 2.3

```text
Introduce dead code analysis
```

---

# User Story

> As a developer,
>
> I want automated dead code detection
>
> so unused files, exports, and dependencies never accumulate.

---

# Acceptance Criteria

- Knip is installed
- Configuration created
- npm script added
- GitHub Action updated
- Weekly maintenance workflow added
- Documentation added

---

# Why Weekly?

This is where my recommendation differs from many teams.

I **would not** run Knip:

- on every commit ❌
- on every push ❌

Why?

Knip performs a project-wide analysis. On a large monorepo, it can take noticeably longer than linting or type checking.

Unlike ESLint, which checks only changed files, Knip scans the entire dependency graph.

So I'd run it:

- ✅ on Pull Requests
- ✅ on `main`
- ✅ on a weekly scheduled workflow

---

# Installation

```bash
npm install -D knip
```

---

# Configuration

Create:

```text
knip.json
```

Example:

```json
{
  "$schema": "https://unpkg.com/knip/schema.json",
  "entry": ["src/index.ts"],
  "project": ["src/**/*.ts"],
  "ignore": ["dist/**", "coverage/**"]
}
```

As the project grows, we'll add additional entry points like worker processes and CLI commands.

---

# Package Script

```json
{
  "scripts": {
    "knip": "knip"
  }
}
```

---

# CI Integration

I wouldn't put it in the main verification job.

Instead:

```yaml
jobs:
  verify: ...

  architecture: ...

  maintenance:
    runs-on: ubuntu-latest

    steps:
      - run: npm ci
      - run: npm run knip
```

This separates:

- **Correctness** (tests)
- **Architecture** (Dependency Cruiser)
- **Maintenance** (Knip)

Each has a single responsibility.

---

# Why Not Pre-commit?

Imagine six months from now.

You modify:

```
organization.controller.ts
```

Knip reports:

```
Unused export in asset.processor.ts
```

That has nothing to do with your change.

Blocking your commit because of an unrelated issue creates unnecessary friction.

---

# Better Workflow

```text
Developer
     │
     ▼
git commit
     │
     ▼
ESLint
Prettier
Commitlint
     │
     ▼
git push
     │
     ▼
Dependency Cruiser
TypeScript
Tests
Build
     │
     ▼
Merge
     │
     ▼
Nightly / Weekly
     │
     ▼
Knip
```

This keeps the inner development loop fast while still maintaining a clean codebase.

---
