---
title: Capability Architecture
status: Accepted
version: 1.0
owner: Architecture
last_updated: 2026-07-28
---

---

# Capability Architecture

## Purpose

The Capability Architecture defines the architectural blueprint for individual business capabilities within the Atlas platform.

Each capability architecture describes a single bounded context, its responsibilities, internal model, boundaries, collaborators, and architectural constraints.

Capability Architecture bridges the gap between the Platform Architecture and implementation.

---

# Relationship to the Architecture

The Atlas architecture is organized into layers.

```text
Engineering Foundation
        │
        ▼
Platform Architecture
        │
        ▼
Capability Architecture
        │
        ▼
Implementation
```

Each layer builds upon the decisions established by the layer above it.

Capability Architecture inherits its principles, terminology, ownership model, and data classification from the Platform Architecture.

---

# Objectives

Every capability architecture should:

- Describe one bounded context.
- Define a single business capability.
- Respect platform boundaries.
- Remain independent of implementation technologies.
- Provide sufficient guidance for implementation.
- Avoid duplicating platform architecture.

---

# Standard Capability Structure

Every capability should follow the same documentation structure.

```text
capability-name/

├── README.md
├── capability-model.md
├── domain-model.md
├── context-interactions.md
├── lifecycle.md
├── business-rules.md
├── events.md
├── permissions.md
└── implementation-guidelines.md
```

Each document has a single responsibility.

---

# Document Responsibilities

## README.md

Navigation and overview for the capability.

---

## capability-model.md

Defines:

- Purpose
- Responsibilities
- Scope
- Architectural boundaries
- Relationships to other capabilities

---

## domain-model.md

Defines:

- Aggregates
- Entities
- Value Objects
- Domain Services
- Domain Events
- Repositories (conceptually)
- Invariants

Technology independent.

---

## context-interactions.md

Defines:

- Upstream contexts
- Downstream contexts
- Published events
- Consumed events
- Collaboration patterns

---

## lifecycle.md

Defines:

- Business lifecycle
- State transitions
- Lifecycle rules
- Invariants

---

## business-rules.md

Defines:

- Policies
- Constraints
- Validation rules
- Behavioral rules

These are business rules, not implementation logic.

---

## events.md

Defines:

- Domain events
- Integration events
- Event responsibilities
- Event ownership

Implementation details such as messaging infrastructure are intentionally excluded.

---

## permissions.md

Defines:

- Capability-specific permissions
- Authorization responsibilities
- Ownership assumptions

This document extends the Ownership Model without redefining it.

---

## implementation-guidelines.md

Provides architectural guidance for implementation.

Typical topics include:

- Recommended layering
- Repository responsibilities
- Transaction boundaries
- Consistency expectations
- Performance considerations

Implementation guidance should remain framework-independent wherever possible.

---

# Architectural Principles

Every capability architecture follows these principles.

## One Capability

Each capability owns one business responsibility.

---

## One Bounded Context

Each capability maps directly to one bounded context identified in the Platform Context Map.

---

## Platform First

Capability architecture extends the Platform Architecture.

It never replaces or contradicts it.

---

## Technology Independent

Capability documents describe architecture rather than frameworks or programming languages.

---

## Single Source of Truth

Business concepts should be defined once.

Capability documents reference Platform Architecture documents rather than redefining shared concepts.

---

# Capability Development Process

Each capability should progress through the same architectural lifecycle.

```text
Discovery
    │
    ▼
Architecture
    │
    ▼
Design
    │
    ▼
Implementation
    │
    ▼
Review
    │
    ▼
Approval
```

No implementation should begin before the architecture has been reviewed and accepted.

---

# Relationship to Platform Architecture

Capability Architecture extends the Platform Architecture.

Every capability inherits:

- Platform principles.
- Domain terminology.
- Ownership semantics.
- Data classification.
- Architectural constraints.

Capabilities may introduce new concepts only when they are specific to the bounded context and do not belong in the shared Platform Architecture.

---

# Governance

Capability Architecture is a living architectural artifact.

Changes should be reviewed through the project's architecture process before implementation.

When introducing a new capability:

1. Confirm it represents a distinct business capability.
2. Ensure it aligns with the Platform Context Map.
3. Reuse existing platform terminology.
4. Respect ownership and data classification rules.
5. Document any significant architectural decisions using an ADR.

Capability Architecture provides the architectural contract between the Platform Architecture and implementation, ensuring that every bounded context evolves consistently while remaining aligned with the overall Atlas architecture.
