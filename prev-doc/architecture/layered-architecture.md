# Layered Architecture

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Architecture
**Last Updated:** July 16, 2026

---

# Purpose

This document defines the architectural layering used throughout the platform.

The layered architecture provides clear separation of responsibilities, protects the business domain from implementation details, and enables the system to evolve without widespread coupling.

Every module within the platform follows this architecture.

---

# Goals

The layered architecture exists to:

- Protect business rules.
- Reduce coupling.
- Improve maintainability.
- Support independent testing.
- Allow infrastructure to evolve without impacting the domain.
- Enable clear ownership of responsibilities.

---

# Architectural Overview

Every business module follows the same structure.

```text
Presentation
        │
        ▼
Application
        │
        ▼
Domain
        ▲
        │
Infrastructure
```

The **Domain** is the center of the architecture.

Everything else exists to support it.

---

# Layer Responsibilities

## Domain

The Domain layer contains the business model.

It defines:

- Entities
- Aggregates
- Value Objects
- Domain Services
- Repository Interfaces
- Domain Events
- Specifications
- Business Rules

The Domain must not depend on frameworks, databases, HTTP, messaging systems, or storage providers.

The Domain should be understandable without knowing which technologies the application uses.

---

## Application

The Application layer coordinates business operations.

Responsibilities include:

- Executing use cases
- Coordinating repositories
- Managing transactions
- Publishing domain events
- Mapping between transport models and domain models

The Application layer does not implement business rules. It orchestrates them.

---

## Infrastructure

The Infrastructure layer provides technical implementations.

Examples include:

- Database repositories
- ORM mappings
- Storage providers
- Redis
- Email providers
- Background workers
- Authentication adapters
- External API integrations

Infrastructure depends on abstractions defined by the Domain or Application.

---

## Presentation

The Presentation layer exposes the system to external clients.

Responsibilities include:

- HTTP controllers
- Request validation
- Response mapping
- Authentication middleware
- Authorization middleware
- API versioning

Presentation should contain no business logic.

---

# Dependency Direction

Dependencies always point toward the Domain.

```text
Presentation
      │
      ▼
Application
      │
      ▼
Domain
```

Infrastructure implements interfaces owned by the Domain or Application and therefore depends inward.

No dependency may bypass the Application layer to access business rules directly.

---

# Stability

The closer a layer is to the Domain, the more stable it should be.

```text
Most Stable
-------------
Domain
Application
Infrastructure
Presentation
-------------
Most Volatile
```

Frameworks, protocols, and integrations change more frequently than business concepts.

The architecture protects the most stable code from the most volatile code.

---

# Communication Between Layers

Each layer communicates only with its immediate neighbor unless explicitly documented.

For example:

- Controllers invoke Use Cases.
- Use Cases invoke repository interfaces.
- Repository implementations satisfy repository interfaces.
- Domain objects never invoke controllers.

This keeps dependencies explicit and predictable.

---

# Layer Boundaries

Cross-layer leakage is prohibited.

Examples of violations include:

- Returning ORM entities from controllers.
- Using HTTP request objects inside use cases.
- Accessing Redis from domain entities.
- Throwing framework-specific exceptions from the Domain.

Boundaries protect the independence of each layer.

---

# Testing Strategy

Each layer should be testable in isolation.

- Domain: Unit tests without infrastructure.
- Application: Unit and integration tests with mocked ports.
- Infrastructure: Integration tests against real adapters where appropriate.
- Presentation: Endpoint and contract tests.

This separation enables fast feedback and targeted verification.

---

# Common Anti-Patterns

Avoid:

- Business logic in controllers.
- ORM entities used as domain models.
- Direct infrastructure access from the Domain.
- Circular dependencies.
- Framework annotations leaking into domain models.

These patterns erode architectural integrity over time.

---

# Evolution

The layered architecture is intended to remain stable even as technologies change.

Replacing Express, PostgreSQL, Redis, or an object storage provider should require changes primarily within Infrastructure and Bootstrap layers, not the Domain.

---

# Relationship to Other Documents

This document is complemented by:

- `docs/architecture/module-design.md`
- `docs/playbook/architecture/dependency-rules.md`
- `docs/playbook/architecture/repositories.md`
- `docs/playbook/architecture/use-cases.md`
- `docs/playbook/architecture/controllers.md`

---

# Summary

The layered architecture is the structural foundation of the platform.

It enables independent evolution of business rules and technology choices while preserving a clear separation of responsibilities.

Every engineering decision should reinforce these boundaries rather than weaken them.
