---
title: ADR-0003 — Ownership Precedes Authorization
status: Accepted
decision_date: 2026-07-28
owner: Architecture
supersedes: None
superseded_by: None
---

---

# ADR-0003 — Ownership Precedes Authorization

## Status

**Accepted**

---

# Context

Atlas is a multi-tenant platform composed of bounded contexts that manage business resources on behalf of organizations and the platform itself.

Every business resource must belong to a well-defined ownership boundary before any access control decisions can be evaluated.

Without explicit ownership, authorization becomes inconsistent because the platform cannot reliably determine:

- Who governs the resource.
- Which tenant the resource belongs to.
- Which policies apply.
- Which permissions may be evaluated.
- Which audit records are required.

Ownership is therefore a business concept that exists independently of authentication, roles, permissions, or access control mechanisms.

For this reason, ownership must be established before authorization is considered.

---

# Decision

Atlas adopts **Ownership Precedes Authorization** as a foundational architectural principle.

Every business resource must have an explicit ownership model before authorization rules are applied.

Within this architecture:

- Ownership is established when a resource is created.
- Every tenant-owned resource belongs to exactly one tenant.
- Platform-owned resources exist independently of tenant ownership.
- Authorization policies evaluate access relative to the resource's ownership.
- Ownership is immutable unless changed through an explicit business process.

Authorization never defines ownership.

Ownership defines the scope within which authorization is evaluated.

---

# Rationale

Separating ownership from authorization provides several long-term advantages.

- Establishes a consistent governance model for every resource.
- Prevents authorization rules from implicitly determining business ownership.
- Enables uniform access control across all bounded contexts.
- Simplifies auditing by identifying the governing owner of every resource.
- Supports future evolution of authorization models without changing ownership semantics.

Ownership is an enduring business concept, whereas authorization policies may evolve over time.

---

# Consequences

The decision has the following architectural consequences.

## Positive

- Every resource has a single governing owner.
- Authorization remains consistent across the platform.
- Audit and compliance capabilities can trace resource governance.
- Business capabilities inherit a common ownership model.
- Cross-tenant access can be evaluated explicitly rather than implicitly.

## Trade-offs

- Resource ownership must be defined as part of domain modeling.
- Ownership changes require explicit business workflows.
- Architectural reviews must verify ownership before evaluating authorization.
- Authorization models cannot compensate for undefined ownership.

These trade-offs are accepted because they strengthen governance, consistency, and long-term maintainability.

---

# Alternatives Considered

## Role-Based Ownership

Treat roles or permissions as the source of ownership.

Rejected because roles describe what an actor may do, not who governs a resource.

---

## Authorization-First Model

Determine ownership through authorization rules.

Rejected because access control policies may change independently of business ownership.

---

## Implicit Ownership

Infer ownership from implementation details such as database relationships or infrastructure configuration.

Rejected because ownership is a business concept that should not depend on implementation.

---

# Architectural Invariants

The following invariants result from this decision.

- Every business resource has an owner.
- Ownership exists independently of authorization.
- Authorization is evaluated within the resource's ownership boundary.
- Tenant ownership and platform ownership are mutually exclusive.
- Ownership changes occur only through explicit business processes.
- Implementation must preserve ownership semantics.

These invariants remain true regardless of authentication mechanisms, permission models, or implementation technologies.

---

# Related Documents

- `docs/architecture/platform/ownership-model.md`
- `docs/architecture/platform/context-map.md`
- `docs/architecture/platform/domain-glossary.md`
- `docs/architecture/platform/data-classification.md`

---

# Related ADRs

- ADR-0001 — Adopt Multi-Tenant Platform Architecture
- ADR-0002 — Adopt Bounded Contexts as the Primary Architectural Boundary
- ADR-0004 — Classify Data by Ownership Scope
- ADR-0005 — Maintain Technology-Independent Platform Architecture
