````markdown
---
title: Developer Foundation
status: Accepted
version: 1.0
owner: Architecture
last_updated: 2026-07-29
---

# Developer Foundation

## Purpose

The Developer Foundation defines the shared engineering capabilities that support the development of every Atlas bounded context.

It establishes a common engineering platform that enables teams to build, test, validate, and maintain software consistently throughout the lifetime of the Atlas platform.

The Developer Foundation is part of the Engineering Architecture and exists independently of any specific business domain.

---

# Mission

Provide every bounded context with a consistent, reusable, and well-governed engineering foundation that promotes quality, maintainability, and developer productivity.

Rather than allowing individual modules to establish their own engineering infrastructure, Atlas provides shared capabilities that can be adopted across the platform.

---

# Architectural Responsibility

The Developer Foundation is responsible for defining the engineering capabilities that are common to all software developed within Atlas.

These responsibilities include:

- Shared engineering capabilities
- Testing architecture
- Engineering quality strategy
- Engineering validation strategy
- Shared developer experience
- Engineering conventions

The Developer Foundation does not implement these capabilities; it defines the architectural model that guides their design and implementation.

---

# Scope

The Developer Foundation governs engineering capabilities that are shared across the platform.

Examples include:

- Testing
- Validation
- Shared engineering utilities
- Test data management
- Local development support
- Engineering tooling
- Quality practices

The Developer Foundation intentionally avoids introducing business-specific responsibilities.

---

# Out of Scope

The following concerns are outside the scope of the Developer Foundation:

- Business domains
- Domain models
- Business workflows
- Product capabilities
- Authorization rules
- Persistence models
- User interfaces

These responsibilities belong to the Platform Architecture and the corresponding bounded contexts.

---

# Architectural Position

The Developer Foundation extends the Engineering Foundation.

```
Engineering Foundation
        │
        ▼
Developer Foundation
        │
        ▼
Business Modules
```

Every future bounded context inherits the Developer Foundation before introducing business-specific capabilities.

---

Engineering Architecture
│
├───────────────┐
│ │
Engineering Developer
Foundation Foundation
│ │
Governance Engineering Capabilities
Lifecycle │
Standards │
Repository ├───────────────┐
Conventions │ │
Testing Validation
│
Engineering Quality Strategy
│
▼
Business Modules

# Relationship to the Engineering Foundation

The Engineering Foundation establishes how Atlas is governed.

The Developer Foundation establishes the engineering capabilities available within that governance model.

The Engineering Foundation provides the rules.

The Developer Foundation provides the reusable capabilities.

---

# Relationship to the Platform Foundation

The Platform Foundation defines the architectural model of Atlas.

The Developer Foundation provides the engineering capabilities used to implement that model.

The two foundations are complementary.

| Engineering                     | Platform              |
| ------------------------------- | --------------------- |
| Shared engineering capabilities | Business architecture |
| Engineering Quality Strategy    | Domain model          |
| Validation strategy             | Platform capabilities |
| Testing architecture            | Business concepts     |

Neither foundation replaces the other.

---

# Relationship to Business Modules

Every bounded context is expected to adopt the engineering capabilities defined by the Developer Foundation..

Business modules consume the engineering capabilities provided by the Developer Foundation rather than establishing independent engineering infrastructure.

This approach promotes consistency, reduces duplication, and simplifies long-term maintenance.

---

# Architectural Principles

The Developer Foundation follows these principles.

## Shared Before Specific

Shared engineering capabilities are established before introducing business-specific solutions.

---

## Consistency Over Duplication

Engineering capabilities should be reused across the platform whenever practical.

---

## Independence from Business Domains

Engineering capabilities remain independent of business concepts.

Business knowledge belongs exclusively within the Platform Architecture and bounded contexts.

---

## Quality by Design

Quality is established through shared engineering capabilities rather than isolated implementation decisions.

---

## Evolution Through Governance

The Developer Foundation evolves through the Engineering Constitution, Architecture Lifecycle, and Architecture Decision Records.

---

# Architectural Boundaries

The Developer Foundation defines architecture.

It does not define implementation.

Implementation decisions—including framework selection, project configuration, tooling, and source code—belong to later phases of the Architecture Lifecycle.

---

# Success Criteria

The Developer Foundation is successful when:

- Every bounded context is expected to adopt the engineering capabilities defined by the Developer Foundation.
- Engineering practices remain consistent across the platform.
- Shared engineering infrastructure eliminates unnecessary duplication.
- Engineering Quality Strategy improves through common standards.
- New capabilities can be introduced without disrupting existing modules.

---

# Future Capability Areas

The Developer Foundation is expected to grow through additional architectural capabilities, including:

- Engineering Capabilities
- Testing Architecture
- Testing Philosophy
- Engineering Quality Strategy

Future capabilities should extend the existing architecture rather than introduce competing engineering approaches.

---

# Governance

The Developer Foundation is governed by:

- Engineering Constitution
- Architecture Lifecycle
- Architecture Decision Records
- Engineering Reviews

Changes to the Developer Foundation should preserve architectural consistency and support the long-term evolution of the platform.

# Summary

The Developer Foundation defines the shared engineering architecture that every Atlas bounded context inherits.

By providing common engineering capabilities independent of business domains, it enables consistent development, improves maintainability, reduces duplication, and ensures that Engineering Quality Strategy scales alongside the platform.
````
