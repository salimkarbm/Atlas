# Project Structure Standard

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Coding Standards
**Last Updated:** July 16, 2026

---

# Purpose

This document defines the standard project structure for the Digital Asset Management Platform.

A consistent project structure improves:

- Discoverability
- Maintainability
- Team onboarding
- Code reviews
- Architectural consistency

Every module introduced into the project should follow these standards unless an approved ADR specifies otherwise.

---

# Guiding Principles

The project structure should:

- Reflect the architecture.
- Reflect the domain.
- Scale with the product.
- Minimize coupling.
- Make dependencies obvious.
- Encourage modularity.

Folders exist to express responsibility, not convenience.

---

# Architectural Layers

The application follows a layered architecture.

```text
Domain
    ↓
Application
    ↓
Infrastructure
```

Every source file belongs to exactly one architectural layer.

Cross-layer responsibilities are prohibited.

---

# Top-Level Repository Structure

The repository should be organized as follows.

```text
.
├── docs/
├── scripts/
├── src/
├── test/
├── migrations/
├── docker/
├── .github/
├── package.json
├── tsconfig.json
└── README.md
```

Each top-level directory has a single responsibility.

---

# Source Directory

The `src/` directory contains all production code.

```text
src/
│
├── app/
├── modules/
├── shared/
├── bootstrap/
└── index.ts
```

---

## app/

Contains application-wide concerns.

Examples include:

- Configuration
- Dependency Injection
- Database
- Logging
- HTTP Server
- Observability

The `app/` directory should never contain business logic.

---

## modules/

Contains business capabilities.

Each module represents a bounded context or major business capability.

Examples:

```text
modules/
    authentication/
    organizations/
    memberships/
    assets/
    folders/
    transformations/
```

Modules should be independent whenever possible.

---

## shared/

Contains reusable code shared across multiple modules.

Examples:

- Value Objects
- Common Errors
- Result Types
- Utilities
- Shared Interfaces

`shared/` must remain small.

Code should not be moved into `shared/` merely to avoid duplication.

A shared abstraction must represent a genuine cross-cutting concern.

---

## bootstrap/

Contains application startup logic.

Examples:

- Environment loading
- Dependency registration
- HTTP startup
- Background worker startup

Bootstrap code should not contain business rules.

---

# Module Structure

Every module follows the same internal structure.

```text
module/
│
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

Consistency across modules is mandatory.

---

# Domain Layer

Responsible for business knowledge.

Contains:

```text
domain/
│
├── aggregates/
├── entities/
├── value-objects/
├── repositories/
├── services/
├── events/
├── specifications/
└── errors/
```

The Domain Layer must not depend on infrastructure frameworks.

---

# Application Layer

Responsible for orchestrating business operations.

Contains:

```text
application/
│
├── use-cases/
├── dto/
├── mappers/
├── commands/
├── queries/
├── validators/
└── ports/
```

The Application Layer coordinates work but should not implement infrastructure.

---

# Infrastructure Layer

Responsible for technical implementation.

Contains:

```text
infrastructure/
│
├── persistence/
├── repositories/
├── storage/
├── cache/
├── messaging/
├── http/
└── providers/
```

Infrastructure adapts external technologies to the application's needs.

---

# Presentation Layer

Responsible for interaction with external clients.

Contains:

```text
presentation/
│
├── controllers/
├── routes/
├── requests/
├── responses/
├── middleware/
└── presenters/
```

Presentation should remain thin.

Business logic belongs elsewhere.

---

# File Organization

Files should be grouped by responsibility rather than file type.

Avoid directories containing dozens of unrelated files.

If a directory becomes difficult to navigate, introduce another level of organization.

---

# Module Independence

Modules communicate through defined interfaces.

Modules should never access another module's infrastructure directly.

Preferred dependency direction:

```text
Presentation
      ↓
Application
      ↓
Domain
```

Infrastructure supports all three but should never become the source of business rules.

---

# Shared Code

Before adding code to `shared/`, ask:

1. Is this used by multiple modules?
2. Does it represent a true cross-cutting concern?
3. Will sharing improve maintainability?
4. Does it belong to a domain instead?

If any answer is uncertain, keep the code within the module.

---

# Dependency Rules

Allowed dependencies:

- Presentation → Application
- Application → Domain
- Infrastructure → Domain
- Infrastructure → Application

Forbidden dependencies:

- Domain → Infrastructure
- Domain → Presentation
- Application → Presentation
- Shared → Module-specific code

Dependency direction must remain explicit.

---

# Naming

Directories should use plural nouns for collections of modules and singular names for individual concepts where appropriate.

Examples:

```text
modules/
assets/
organizations/

asset/
organization/
```

Avoid abbreviations unless universally understood.

---

# Scalability

The structure should support:

- Additional modules
- Multiple storage providers
- Background workers
- Message brokers
- Future APIs
- Microservice extraction (if ever required)

Without requiring major reorganization.

---

# Anti-Patterns

Avoid:

- Generic `helpers/`
- Generic `utils/`
- Generic `common/`
- Deep nesting without purpose
- Circular dependencies
- Feature code inside `app/`
- Business logic inside controllers

Every directory should have a clearly defined responsibility.

---

# Exceptions

Any deviation from this structure requires either:

- a documented engineering decision; or
- an approved Architecture Decision Record (ADR).

Consistency is preferred over individual preference.

---

# Review Checklist

Before introducing a new directory, verify:

- Does it have a single responsibility?
- Does it fit an existing architectural layer?
- Does it introduce unnecessary nesting?
- Does it violate dependency rules?
- Will another engineer immediately understand its purpose?

If not, reconsider the design.

---

# Module Contract

src/modules/assets/
├── README.md
├── domain/
├── application/
├── infrastructure/
└── presentation/

That README.md would answer:

- What problem does this module solve?
- What aggregate(s) does it own?
- What public APIs does it expose?
- Which modules depend on it?
- Which ADRs apply to it?
- What invariants does it enforce?

This creates self-documenting modules and makes onboarding far easier as the platform grows.

# Summary

Project structure is part of the architecture.

A well-organized repository enables engineers to understand, extend, and maintain the platform without relying on tribal knowledge.

Every folder should communicate intent.

Every module should reflect the architecture.

Consistency is a long-term investment in Engineering Quality Strategy.
