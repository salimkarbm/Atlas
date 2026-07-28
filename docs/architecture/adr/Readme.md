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

While the Platform Architecture defines **what** Atlas is, ADRs explain **why** those architectural decisions were made.

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

An ADR should be created when a decision:

- Defines or changes the platform architecture.
- Introduces a new architectural principle.
- Changes architectural boundaries.
- Changes ownership semantics.
- Affects multiple bounded contexts.
- Alters long-term architectural direction.
- Supersedes a previously accepted architectural decision.

Routine implementation, design, or development decisions should not be documented as ADRs.

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
Engineering
        │
        ▼
Platform Architecture
        │
        ▼
Architecture Decision Records
        │
        ▼
Domain Architecture
```

The Platform Architecture defines the canonical architectural model.

The ADRs explain the reasoning behind that model.

Domain Architecture inherits both.

---

# Governance

Architecture Decision Records are part of the Atlas Architecture documentation.

Changes to accepted ADRs should be rare and require architectural review.

A new ADR should be created when introducing a significant architectural decision.

An existing ADR should only be modified to:

- Correct factual errors.
- Improve clarity.
- Update references.
- Record that it has been superseded.

The original architectural rationale should be preserved whenever possible to maintain an accurate history of the platform's evolution.
