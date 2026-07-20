---
# Story 2.2 — Enforce Architectural Dependency Rules

## Epic

Epic 2: Code Quality
---

## Story

As a developer,

I want architectural boundaries to be automatically enforced,

so that modules remain loosely coupled and the codebase stays maintainable as it grows.

---

## Why This Story Exists

Our architecture is based on strict layered boundaries:

```text
Presentation
        ↓
Application
        ↓
Domain
        ↓
Repository Interfaces
        ↓
Infrastructure
```

As the project grows, developers may unintentionally introduce dependencies that violate these layers.

Examples include:

- Domain importing Express
- Domain importing TypeORM
- Application importing PostgreSQL entities
- One module importing another module's infrastructure
- Core importing framework code

These mistakes are difficult to detect during code reviews but can be prevented automatically through dependency analysis.

This story introduces automated architectural validation as part of the development workflow.

---

# Acceptance Criteria

## Dependency Analysis

- Install and configure `dependency-cruiser`.
- Add a project-wide dependency configuration.
- Integrate dependency validation into the development workflow.

---

## Architectural Rules

### Core Layer

The `core` package:

- must not import Express
- must not import TypeORM
- must not import PostgreSQL
- must not import Redis
- must not import external services
- must not import application modules
- must only contain framework-independent code

---

### Domain Layer

Each module's `domain` layer:

- may import `@core`
- may import itself
- must not import Express
- must not import TypeORM
- must not import infrastructure
- must not import presentation
- must not import another module's infrastructure

---

### Application Layer

The `application` layer:

- may import `domain`
- may import repository interfaces
- may import `@core`
- must not import Express
- must not import TypeORM entities directly

---

### Infrastructure Layer

The `infrastructure` layer:

- may implement repository interfaces
- may import TypeORM
- may import external SDKs
- may not import presentation

---

### Presentation Layer

The `presentation` layer:

- may import application use cases
- may import DTOs
- must not access repositories directly
- must not execute SQL
- must not contain business logic

---

## Module Isolation

Modules must remain independent.

Allowed:

```text
modules/assets/application
        ↓
modules/assets/domain
```

Not allowed:

```text
modules/assets/application
        ↓
modules/users/infrastructure
```

Cross-module communication should happen through public application interfaces or shared abstractions, never through another module's infrastructure.

---

## Circular Dependency Detection

The dependency analysis must fail if circular dependencies are introduced.

Examples:

```text
Organization
        ↓
Member
        ↓
Organization
```

```text
Asset
        ↓
Folder
        ↓
Asset
```

---

## CI Integration

Dependency validation must run:

- during local development
- before pushing changes
- in GitHub Actions

Any architectural violation should fail the build.

---

## Package Scripts

Add the following script:

```json
{
  "scripts": {
    "depcheck": "dependency-cruiser --config dependency-cruiser.cjs src"
  }
}
```

Include `npm run depcheck` in the CI pipeline alongside linting, type checking, tests, and build verification.

---

## Definition of Done

- Dependency Cruiser is installed and configured.
- Architectural dependency rules are documented in code.
- Circular dependencies are detected automatically.
- Layering rules are enforced automatically.
- CI fails on architectural violations.
- Pre-push validation includes dependency analysis.
- New modules inherit the same architectural constraints without additional configuration.

---

## Future Enhancements

This story establishes the foundation for architectural governance. Future improvements may include:

- Visual dependency graphs
- Layer-specific metrics
- Complexity analysis
- Dead code detection
- Import path restrictions
- Automated architectural documentation generation
