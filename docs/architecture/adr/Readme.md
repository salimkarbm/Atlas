---
title: Architecture Decision Records
status: Living
version: 1.0
owner: Architecture
last_updated: 2026-07-25
---

---

# Architecture Decision Records (ADRs)

## Purpose

Architecture Decision Records (ADRs) document the significant architectural decisions that shape the Atlas platform.

While the Architecture Specifications define the architectural responsibilities of Atlas, ADRs explain why significant architectural decisions were made..

Each ADR captures the context, decision, rationale, consequences, and alternatives considered, providing a permanent record of the platform's architectural evolution.

---

# Objectives

The Architecture Decision Record repository exists to:

- Preserve architectural knowledge.
- Record the rationale behind significant decisions.
- Provide historical context for future contributors.
- Support consistent architectural evolution.
- Improve transparency in architectural governance.

ADRs complement the Platform Architecture and should be considered part of the project's authoritative architectural documentation.

---

# When to Create an ADR

An ADR should not be created for:

- Routine implementation decisions.
- Coding conventions.
- Framework configuration.
- Repository organization.
- Milestone planning.
- Development workflows.
- Temporary engineering decisions.

These concerns belong in implementation, development documentation, or engineering planning rather than the architectural decision record repository.

---

# ADR Structure

Every ADR follows the standard project template.

An ADR should include:

- Status
- Context
- Decision
- Rationale
- Consequences
- Alternatives Considered
- Architectural Invariants
- Related Documents
- Related ADRs

Maintaining a consistent structure improves readability and simplifies architectural review.

---

# Reading Order

The foundational ADRs should be read in numerical order.

```text id="u2qzcv"
ADR-0001
Multi-Tenant Platform
        │
        ▼
ADR-0002
Bounded Contexts
        │
        ▼
ADR-0003
Ownership Precedes Authorization
        │
        ▼
ADR-0004
Classify Data by Ownership Scope
        │
        ▼
ADR-0005
Maintain Technology-Independent Platform Architecture
```

Each ADR builds upon the decisions established by the ADRs before it.

---

# Foundational ADRs

The first five ADRs establish the enduring architectural principles of Atlas.

Together they define that:

- Atlas is a multi-tenant platform.
- The platform is organized into bounded contexts.
- Ownership precedes authorization.
- Data is classified by ownership scope.
- Platform Architecture is independent of implementation technology.

Future ADRs should extend these principles rather than redefine them.

If a foundational decision must change, it should be replaced through a formal superseding ADR.

---

# ADR Lifecycle

Every Architecture Decision Record progresses through the following lifecycle.

```text id="m4f5dg"
Proposed
        │
        ▼
Review
        │
        ▼
Accepted
        │
        ▼
Superseded (optional)
```

Accepted ADRs represent the current architectural direction of the platform.

Superseded ADRs remain part of the repository to preserve the project's architectural history.

---

# Numbering

ADRs are numbered sequentially.

Example:

```text id="4kz8wq"
ADR-0001
ADR-0002
ADR-0003
...
```

Numbers are never reused.

If an ADR is withdrawn or superseded, its identifier remains permanently reserved.

---

# Relationship to Other Architecture

Architecture Decision Records support, but do not replace, the Platform Architecture.

The relationship is:

```text id="b4r8ph"
Engineering Constitution
        │
        ▼
Architecture Lifecycle
        │
        ▼
Architecture Specifications
        │
        ▼
Architecture Decision Records
        │
        ▼
Design Specifications
```

The Platform Architecture defines the canonical architectural model.

The ADRs explain the reasoning behind that model.

Domain Architecture inherits both.

Architecture Decision Records influence architectural responsibilities.

Approved architectural decisions are subsequently realized through the corresponding Design Specifications.

Implementation realizes the approved Design Specifications rather than the ADRs directly.

---

# Governance

Architecture Decision Records are part of the Atlas Architecture documentation.

Changes to accepted ADRs should be rare and require architectural review.

A new ADR should be created when introducing, changing, or superseding a significant architectural decision that affects the long-term architecture of the platform.

ADRs should not duplicate information contained in the Engineering Constitution, Architecture Specifications, or Design Specifications.

Instead, they document the rationale behind significant architectural decisions and reference the affected engineering artifacts.

An existing ADR should only be modified to:

- Correct factual errors.
- Improve clarity.
- Update references.
- Record that it has been superseded.

The original architectural rationale should be preserved whenever possible to maintain an accurate history of the platform's evolution.
