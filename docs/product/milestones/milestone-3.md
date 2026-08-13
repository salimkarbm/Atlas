---
title: Milestone 3 — Developer Foundation
status: Active
version: 2.2
owner: Architecture
last_updated: 2026-08-09
---

---

# Milestone 3 — Developer Foundation

## Theme

Establish the reusable engineering capabilities that support software development across the Atlas platform.

---

# Status

🚧 In Progress

---

# Objective

Build the Atlas Developer Foundation.

The Developer Foundation provides shared engineering capabilities that improve developer productivity, engineering consistency, software verification, and long-term maintainability.

Unlike Milestone 1, which established the engineering environment and governance model, this milestone delivers reusable engineering capabilities that are consumed by every bounded context.

---

# Scope

Milestone 3 includes:

- Developer Foundation Architecture
- Developer Foundation Design
- Testing Foundation
- Validation Foundation
- Shared Engineering Utilities
- Developer Tooling
- Developer Foundation Engineering Review

This milestone does not include:

- Repository Foundation
- Code Quality Infrastructure
- Persistence Infrastructure
- Platform Architecture
- Business-domain implementation

These capabilities were completed in previous milestones.

---

# Implementation Plan

## Phase 1 — Architecture

| PR        | Deliverable                       |   Status    |
| --------- | --------------------------------- | :---------: |
| PR-0008.0 | Developer Foundation Architecture | ✅ Complete |

### Architecture Review

**Status:** ✅ Complete

---

## Phase 2 — Design

| PR        | Deliverable                 |   Status    |
| --------- | --------------------------- | :---------: |
| PR-0008.1 | Developer Foundation Design | ✅ Complete |

### Design Review

**Status:** ✅ Complete

---

## Phase 3 — Implementation

| PR          | Deliverable                     |   Status    |
| ----------- | ------------------------------- | :---------: |
| PR-0008.2.1 | Developer Foundation Core       | ✅ Complete |
| PR-0008.2.2 | Local Development Foundation    | ✅ Complete |
| PR-0008.2.3 | Developer Tooling Foundation    | ✅ Complete |
| PR-0008.2.4 | Testing Foundation              | ✅ Complete |
| PR-0008.2.5 | Validation Foundation           | ✅ Complete |
| PR-0008.2.6 | Shared Engineering Utilities    | ✅ Complete |
| PR-0008.2.7 | Developer Foundation Completion | ✅ Complete |

---

## PR-0008.2.6 Outcome

PR-0008.2.6 establishes the architectural and governance boundary for Shared Engineering Utilities.

The capability is intentionally implemented as a governed extension point rather than a generic utility collection.

Discovery established that the current Atlas codebase does not contain additional cross-context utility duplication that justifies introducing new production utilities.

Accordingly:

- existing shared assertion primitives remain in `src/core/internal/assert/`;
- `src/core/utils/` remains available for future justified Shared Engineering Utilities;
- `deepEqual` is deferred;
- `deepFreeze` is deferred;
- speculative generic helpers are not introduced;
- test-specific helpers remain owned by the Testing Foundation;
- domain-specific utilities remain owned by their respective architectural responsibilities.

The absence of new utility implementation is an intentional architectural outcome and does not represent incomplete implementation.

---

### Current Progress

```text
Milestone 3
Developer Foundation

██████████████████████████████████

✅ PR-0008.0  Developer Foundation Architecture

↓

✅ Architecture Review

↓

✅ PR-0008.1  Developer Foundation Design

↓

✅ Design Review

↓

✅ PR-0008.2.1  Core Engineering Foundations

↓

✅ PR-0008.2.2  Local Development Foundation

↓

✅ PR-0008.2.3  Developer Tooling Foundation

↓

✅ PR-0008.2.4  Testing Foundation

↓

✅ PR-0008.2.5  Validation Foundation

↓

✅ PR-0008.2.6  Shared Engineering Utilities

↓

✅ PR-0008.2.7  Developer Foundation Completion

↓

✅ Engineering Review
```

---

# Implementation Traceability

Each implementation PR contributes to one or more capabilities defined in:

`docs/architecture/developer-foundation/engineering-capabilities.md`

The Engineering Capabilities document is the canonical architectural definition of shared engineering capabilities.

This milestone defines the implementation roadmap for delivering those capabilities.

Implementation sequencing may evolve without changing the architectural capability model.

Where a capability does not require a separate implementation deliverable, the milestone does not introduce artificial implementation work solely to satisfy the capability model.

---

# Phase 4 — Engineering Review

| Activity                                |   Status    |
| --------------------------------------- | :---------: |
| Developer Foundation Engineering Review | ✅ Complete |

---

# Current Progress

```text
Milestone 3
Developer Foundation

██████████████████████████████████

Architecture
    ✅ Developer Foundation Architecture
    ✅ Architecture Review

Design
    ✅ Developer Foundation Design
    ✅ Design Review

Implementation
    ✅ Core Engineering Foundations
    ✅ Local Development Foundation
    ✅ Developer Tooling Foundation
    ✅ Testing Foundation
    ✅ Validation Foundation
    ✅ Shared Engineering Utilities
    ✅ Developer Foundation Completion

Final Review
   ✅ Developer Foundation Engineering Review
```

---

# Dependencies

Milestone 3 depends on the successful completion of:

- Milestone 1 — Engineering Foundation
- Milestone 2 — Platform Foundation

The capabilities delivered in this milestone become shared engineering services available to every bounded context within Atlas.

---

# Success Criteria

Milestone 3 is complete when:

- Developer Foundation Architecture is approved.
- Developer Foundation Design is approved.
- Testing Foundation is operational.
- Validation Foundation is operational.
- Shared Engineering Utilities is established.
- Developer Tooling is available to all contributors.
- Developer Foundation Completion is accepted.
- The completed Developer Foundation passes Engineering Review.

---

# Architectural Outcomes

At the completion of this milestone, Atlas will provide:

- Shared testing capabilities.
- Shared validation capabilities.
- Shared engineering capabilities.
- Shared developer tooling.
- A governed extension point for future Shared Engineering Utilities.
- A reusable engineering foundation for future bounded contexts.

Shared Engineering Utilities do not require a collection of generic helper functions to be considered established. The capability is defined by its architectural boundary, eligibility rules, ownership, and governance.

---

# Risks

Potential risks include:

- Introducing abstractions before demonstrated need.
- Blurring capability boundaries.
- Coupling engineering capabilities to specific frameworks.
- Documentation drift.
- Treating capability definitions as requirements to create unnecessary implementation.

These risks are mitigated through architecture reviews, design reviews, engineering reviews, and adherence to the Engineering Constitution.

---

# Relationship to Other Documentation

This milestone complements:

- Product Roadmap
- Engineering Constitution
- Engineering Quality Strategy
- Developer Foundation Architecture
- Developer Foundation Design
- Engineering Capabilities
- Architecture Decision Records (ADRs)

---

# Summary

Milestone 3 delivers the reusable engineering capabilities that form the Atlas Developer Foundation.

By completing this milestone, Atlas establishes a shared engineering platform that supports consistent development, verification, and maintenance across every bounded context while remaining independent of business-domain functionality.

The milestone deliberately favors demonstrated engineering need over speculative abstraction. Shared Engineering Utilities are therefore established as a governed capability without introducing unnecessary utility implementations.

The remaining work is Developer Foundation Completion followed by the Developer Foundation Engineering Review.
