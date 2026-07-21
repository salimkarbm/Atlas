# Module Design

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Architecture
**Last Updated:** July 16, 2026

---

# Purpose

This document defines how business capabilities are organized into modules.

A module is the primary unit of organization, ownership, and evolution within the platform.

Modules enable the platform to scale in functionality without becoming tightly coupled.

---

# What Is a Module?

A module represents a cohesive business capability.

Examples include:

- Authentication
- Organizations
- Memberships
- Assets
- Folders
- Transformations

A module owns its business rules, data, and public contracts.

---

# Design Principles

Every module should:

- Have a single, well-defined responsibility.
- Encapsulate its implementation details.
- Expose a minimal public surface.
- Minimize dependencies on other modules.
- Be independently testable.
- Be independently understandable.

Modules are architectural boundaries, not merely folders.

---

# Standard Module Structure

Every module follows the same internal layout.

```text
module/
├── README.md
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

Consistency across modules improves discoverability and reduces onboarding time.

---

# Module Ownership

A module owns:

- Its aggregates.
- Its entities.
- Its repository interfaces.
- Its use cases.
- Its persistence implementation.
- Its transport layer.

No other module may modify another module's internal implementation.

---

# Public API

A module exposes only the contracts required by other modules.

Public APIs may include:

- Application services.
- Published interfaces.
- Domain events.
- Shared DTOs where explicitly approved.

Everything else should remain internal.

---

# Cross-Module Communication

Modules should communicate through explicit contracts.

Preferred mechanisms include:

1. Application service interfaces.
2. Published domain events.
3. Shared abstractions for cross-cutting concerns.

Direct access to another module's infrastructure is prohibited.

---

# Shared Code

Code belongs in a module unless it is genuinely shared.

The `shared/` directory is reserved for cross-cutting concerns such as:

- Result types.
- Common Value Objects.
- Base abstractions.
- Shared interfaces.

Do not move code into `shared/` solely to avoid duplication.

---

# Module README

Every module must include a `README.md`.

The README should document:

- Purpose.
- Business capability.
- Aggregates.
- Public APIs.
- External dependencies.
- Related ADRs.
- Related architecture documents.

A new contributor should understand the module by reading its README.

---

# Dependencies

Modules should depend on contracts, not implementations.

The dependency graph between modules should remain acyclic.

When two modules begin depending on each other, reconsider ownership or introduce an explicit integration mechanism.

---

# Testing

Modules should be testable independently.

Tests should verify:

- Business rules.
- Public contracts.
- Integration points.

Tests should avoid relying on unrelated modules whenever possible.

---

# Evolution

Modules should evolve internally without affecting consumers.

Changes to a module's public API require careful review and, where appropriate, versioning.

Encapsulation enables safe evolution.

---

# Review Checklist

Before introducing or modifying a module, ask:

1. Does it represent a single business capability?
2. Does it own its implementation?
3. Is its public API minimal?
4. Can another engineer understand it independently?
5. Does it avoid unnecessary dependencies?
6. Does it expose business concepts rather than technical details?

---

# Relationship to Other Documents

This document builds on:

- `docs/constitution.md`
- `docs/glossary.md`
- `docs/architecture/layered-architecture.md`

Implementation guidance is provided in the Playbook, particularly:

- Dependency Rules
- Project Structure
- Repositories
- Use Cases
- Controllers

---

# Summary

Modules are the primary organizational unit of the platform.

Well-designed modules create clear ownership, reduce coupling, and allow the system to grow through cohesive business capabilities rather than an ever-expanding collection of unrelated components.

Every new feature should strengthen the modular structure rather than dilute it.
