# Ownership Model Design

## Purpose

The Ownership Model defines the canonical ownership boundaries of the Atlas platform.

It establishes who owns platform resources, how ownership is represented, how ownership influences authorization, and the architectural invariants that govern every business capability.

The Ownership Model is the authoritative source for ownership semantics throughout the Atlas platform.

---

# Responsibility

The Ownership Model is responsible for:

- Defining ownership within the platform.
- Identifying ownership boundaries.
- Defining ownership relationships.
- Defining ownership invariants.
- Establishing the architectural basis for authorization.
- Defining platform-owned and tenant-owned resources.

The Ownership Model is **not** responsible for:

- Authentication.
- Permission evaluation.
- Role definitions.
- Data storage.
- API behavior.
- Database design.
- Implementation details.

Those responsibilities belong to other architectural documents.

---

# Architectural Principles

The Ownership Model follows these principles.

## Every Resource Has an Owner

Every persistent business resource within Atlas has one authoritative owner.

Ownership is never ambiguous.

---

## Ownership Precedes Authorization

Authorization decisions are evaluated only after ownership has been established.

Ownership defines the scope within which permissions are applied.

---

## Ownership Is Explicit

Ownership is represented explicitly by the platform.

Ownership is never inferred from implementation details.

---

## Ownership Is Stable

Ownership changes only through deliberate business operations.

Implementation concerns must never redefine ownership.

---

## Ownership Cannot Cross Boundaries

A business resource cannot be simultaneously owned by multiple organizations.
Shared access does not imply shared ownership.

---

## Ownership Defines Boundaries

Ownership establishes architectural boundaries for governance, authorization, auditing, and lifecycle management.

---

# Ownership Hierarchy

Ownership exists at multiple levels within the platform.

```text
Atlas Platform
        │
        ▼
Organization
        │
        ▼
Business Resource
```

The platform owns global resources.

Organizations own tenant resources.

Business resources inherit ownership from their owning organization unless explicitly defined otherwise.

---

# Ownership Categories

The platform recognizes three ownership categories.

## Platform-Owned

Resources managed by the Atlas platform itself.

Examples:

- Platform configuration
- Global policies
- System metadata
- Platform administration

---

## Organization-Owned

Resources owned and governed by a single organization.

Examples:

- Assets
- Collections
- Folders
- Organization settings
- Memberships

---

## User-Scoped

Resources that exist for an individual user's experience but remain governed within the platform.

Examples:

- Personal preferences
- Notification settings
- Saved searches

---

# Ownership Relationships

Ownership establishes relationships rather than implementation details.

Examples include:

- The platform owns global configuration.
- Organizations own business resources.
- Users participate in organizations through memberships.
- Assets inherit organizational ownership.
- Collections do not redefine ownership.
- Folders organize resources without changing ownership.

---

# Ownership Invariants

The following rules must always hold true.

- Every resource has exactly one owner.
- Ownership is explicit.
- Ownership is independent of storage.
- Ownership is independent of deployment architecture.
- Ownership is preserved throughout a resource's lifecycle.
- Ownership changes only through approved business operations.
- Ownership boundaries are respected by every platform capability.

These invariants are architectural rules and must remain true regardless of implementation technology.

---

# Relationship to Authorization

Ownership and authorization are related but distinct.

Ownership determines **whose resource** is being accessed.

Authorization determines **whether an action is permitted** on that resource.

Authorization must never redefine ownership.

---

# Relationship to Other Documents

| Document                  | Responsibility                                                  |
| ------------------------- | --------------------------------------------------------------- |
| `atlas-platform-model.md` | Defines the platform's core concepts and principles.            |
| `domain-glossary.md`      | Defines canonical business terminology.                         |
| `context-map.md`          | Defines business capability boundaries.                         |
| `ownership-model.md`      | Defines ownership semantics and architectural invariants.       |
| `data-classification.md`  | Defines how ownership influences data scope and classification. |

The Ownership Model complements these documents without duplicating their responsibilities.

---

# Governance

The Ownership Model is a living architectural artifact.

Changes to ownership semantics require architectural review because they affect authorization, data classification, business capabilities, APIs, and platform governance.

Ownership rules should evolve only when the platform's fundamental business model changes.

The Ownership Model serves as the canonical reference for ownership throughout the Atlas platform.
