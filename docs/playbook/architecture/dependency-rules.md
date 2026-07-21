# Dependency Rules

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Architecture Standards
**Last Updated:** July 16, 2026

---

# Purpose

This document defines the dependency rules for the Digital Asset Management Platform.

These rules preserve the architectural integrity of the system by ensuring that dependencies always point in the correct direction.

Every source file, module, and package must comply with these rules.

---

# Guiding Principles

Dependency direction is one of the primary mechanisms used to protect the architecture.

A dependency should always point toward a more stable layer.

Business rules should never depend on implementation details.

Frameworks support the application; they do not define it.

---

# Layered Architecture

The platform follows a layered architecture.

```text
Presentation
        │
        ▼
Application
        │
        ▼
Domain

Infrastructure
        ▲
        │
Supports all layers
```

The **Domain** is the core of the system.

Everything else exists to support it.

---

# Layer Responsibilities

## Domain

Responsible for business rules.

Contains:

- Entities
- Value Objects
- Aggregates
- Domain Services
- Repository Interfaces
- Domain Events
- Specifications

The Domain must remain completely independent of frameworks.

---

## Application

Responsible for orchestrating business operations.

Contains:

- Use Cases
- Commands
- Queries
- DTOs
- Application Services
- Ports

The Application Layer coordinates work.

It does not contain infrastructure concerns.

---

## Infrastructure

Responsible for technical implementation.

Contains:

- Database repositories
- ORM mappings
- Storage providers
- Redis
- Message brokers
- Authentication providers
- External APIs

Infrastructure implements abstractions defined elsewhere.

---

## Presentation

Responsible for communication with external clients.

Contains:

- Controllers
- Routes
- Middleware
- Request validation
- Response mapping

Presentation should remain thin.

Business logic belongs elsewhere.

---

# Allowed Dependencies

The following dependencies are permitted.

| From           | To                                              |
| -------------- | ----------------------------------------------- |
| Presentation   | Application                                     |
| Presentation   | Domain _(read-only types only, when justified)_ |
| Application    | Domain                                          |
| Infrastructure | Domain                                          |
| Infrastructure | Application                                     |
| Bootstrap      | All Layers                                      |

No other dependency directions are permitted without an ADR.

---

# Forbidden Dependencies

The following are prohibited.

| From                    | To                      |
| ----------------------- | ----------------------- |
| Domain                  | Infrastructure          |
| Domain                  | Presentation            |
| Domain                  | Express                 |
| Domain                  | TypeORM                 |
| Domain                  | Redis                   |
| Domain                  | Cloudinary SDK          |
| Domain                  | PostgreSQL Driver       |
| Application             | Presentation            |
| Shared                  | Module Infrastructure   |
| Module A Infrastructure | Module B Infrastructure |

These violations introduce architectural coupling.

---

# Dependency Inversion

Infrastructure depends on interfaces.

Example:

```text
Domain
│
├── UserRepository
│
▼

Infrastructure
│
└── TypeOrmUserRepository
```

Repository interfaces belong to the Domain.

Repository implementations belong to Infrastructure.

---

# Framework Independence

Frameworks must remain replaceable.

Examples:

Instead of:

```typescript
class User extends BaseEntity {}
```

Prefer:

```typescript
class User {}
```

Instead of exposing TypeORM entities throughout the application, map them to domain models.

---

# Cross-Module Dependencies

Modules should communicate through well-defined contracts.

Preferred flow:

```text
Organization Module
        │
        ▼
Application Contract
        │
        ▼
Member Module
```

Avoid importing another module's infrastructure directly.

Cross-module communication should occur through:

- Application services
- Published interfaces
- Domain events (where appropriate)

---

# Shared Module Rules

The `shared` module exists for cross-cutting concerns.

Allowed examples:

- Result types
- Common exceptions
- Value Objects
- Utility abstractions
- Shared interfaces

Not allowed:

- Business logic from specific modules
- Organization-specific code
- Asset-specific helpers
- Repository implementations

When in doubt, keep code within the owning module.

---

# Circular Dependencies

Circular dependencies are prohibited.

The dependency graph must remain acyclic.

If two modules depend on each other:

1. Re-evaluate ownership.
2. Extract a shared abstraction.
3. Introduce an application contract.
4. Consider a domain event.

Circular imports are treated as architectural defects.

---

# Dependency Analysis

The repository enforces dependency rules through automated tooling.

Current tools include:

- dependency-cruiser
- Knip
- ESLint

Architecture violations should fail CI.

Manual review is not sufficient.

---

# Introducing a New Dependency

Before adding a dependency, ask:

1. Does the standard library already solve this problem?
2. Does an existing dependency already provide this capability?
3. Is the dependency actively maintained?
4. Is it compatible with our license requirements?
5. Does it introduce unnecessary transitive dependencies?
6. Can it be isolated behind an abstraction?
7. Does it align with the Constitution?

Every new dependency increases long-term maintenance cost.

---

# Layer Checklist

Before writing code, ask:

### Domain

- Does this depend on a framework?
- Does this contain business rules?
- Can this be tested without infrastructure?

---

### Application

- Does this coordinate rather than implement business rules?
- Does it avoid persistence concerns?
- Does it avoid HTTP concerns?

---

### Infrastructure

- Does this implement an interface?
- Can it be replaced without changing the Domain?
- Does it avoid business rules?

---

### Presentation

- Is this only handling transport concerns?
- Is validation performed at the boundary?
- Is business logic delegated?

---

# Examples

## Good

```text
Controller
      │
      ▼
Use Case
      │
      ▼
Repository Interface
      │
      ▼
TypeORM Repository
```

---

## Bad

```text
Controller
      │
      ▼
TypeORM Entity
      │
      ▼
Database
```

The controller should not bypass the application layer.

---

## Better

```text
Controller
      │
      ▼
CreateAssetUseCase
      │
      ▼
AssetRepository
      │
      ▼
TypeOrmAssetRepository
```

Each layer has a clear responsibility.

---

# Enforcement

Dependency rules are enforced through:

- Project structure
- Code review
- Static analysis
- Continuous Integration
- Engineering discipline

Architectural integrity should not rely solely on convention.

---

# Exceptions

Any exception to these rules requires:

1. A documented rationale.
2. Team review.
3. An approved ADR.

Temporary exceptions should include a plan for removal.

---

# Stability Direction

Domain
↑ Stable

Application
↑ Moderately Stable

Infrastructure
↑ Frequently Changes

Dependencies should point toward more stable code, not just inward.

This reinforces why the Domain sits at the center: business concepts tend to outlive databases, web frameworks, and cloud providers.

# Summary

Dependencies define architecture.

Correct dependency direction protects the Domain, reduces coupling, and preserves long-term maintainability.

When implementation details remain isolated from business rules, the platform can evolve without costly rewrites.

Architecture is preserved not by intention, but by consistently enforcing dependency boundaries.
