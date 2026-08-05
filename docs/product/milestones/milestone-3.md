---
title: Milestone 3 — Developer Foundation
status: Active
version: 2.1
owner: Architecture
last_updated: 2026-07-31
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

Architecture Review

**Status:** ✅ Complete

---

## Phase 2 — Design

| PR        | Deliverable                 |   Status    |
| --------- | --------------------------- | :---------: |
| PR-0008.1 | Developer Foundation Design | ✅ Complete |

Design Review

**Status:** ✅ Complete

---

## Phase 3 — Implementation

| PR          | Deliverable                     |     Status     |
| ----------- | ------------------------------- | :------------: |
| PR-0008.2.1 | Developer Foundation Core       |  ✅ Complete   |
| PR-0008.2.2 | Local Development Foundation    |  ✅ Complete   |
| PR-0008.2.3 | Developer Tooling Foundation    |  ✅ Complete   |
| PR-0008.2.4 | Testing Foundation              |  ✅ Complete   |
| PR-0008.2.5 | Validation Foundation           | 🚧 In Progress |
| PR-0008.2.6 | Shared Engineering Capabilities |   ⬜ Planned   |
| PR-0008.2.7 | Developer Foundation Completion |   ⬜ Planned   |

---

### Current Progress

```text
Milestone 3
Developer Foundation

██████████████████████████████░░░░░░░░░░░

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

🚧 PR-0008.2.5 Validation Foundation

↓

⬜ PR-0008.2.6  Shared Engineering utilities

↓

⬜ PR-0008.2.7  Developer Foundation Completion

↓

⬜ Engineering Review
```

### Implementation Traceability

Each implementation PR contributes to one or more capabilities defined in
`docs/architecture/developer-foundation/engineering-capabilities.md`.

The Engineering Capabilities document is the canonical architectural definition of shared engineering capabilities.

This milestone defines the implementation roadmap for delivering those capabilities.

Implementation sequencing may evolve without changing the architectural capability model.

---

## Phase 4 — Engineering Review

| Activity                                |   Status   |
| --------------------------------------- | :--------: |
| Developer Foundation Engineering Review | ⬜ Planned |

---

# Current Progress

```
Milestone 3
Developer Foundation

██████████████████████████████░░░░░░░░░░░

✅ PR-0008.0  Developer Foundation Architecture

↓

✅ Architecture Review

↓

✅ PR-0008.1  Developer Foundation Design

↓

✅ Design Review

↓

✅ PR-0008.2.1 Core Engineering Foundations

↓

✅ PR-0008.2.2  Local Development Foundation

↓

✅ PR-0008.2.3  Developer Tooling Foundation

↓

✅ PR-0008.2.4  Testing Foundation

↓

🚧 PR-0008.2.5 Validation Foundation

↓

⬜ PR-0008.2.6  Shared Engineering Utilities

↓

⬜ PR-0008.2.7  Developer Foundation Completion

↓

⬜ Engineering Review
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
- The completed Developer Foundation passes Engineering Review.

---

# Architectural Outcomes

At the completion of this milestone, Atlas will provide:

- Shared testing capabilities.
- Shared validation capabilities.
- Shared engineering infrastructure.
- Shared developer tooling.
- A reusable engineering foundation for future bounded contexts.

These capabilities reduce duplication, improve consistency, and enable sustainable platform evolution.

---

# Risks

Potential risks include:

- Introducing abstractions before demonstrated need.
- Blurring capability boundaries.
- Coupling engineering capabilities to specific frameworks.
- Documentation drift.

These risks are mitigated through architecture reviews, design reviews, engineering reviews, and adherence to the Engineering Constitution.

---

# Relationship to Other Documentation

This milestone complements:

- Product Roadmap
- Engineering Constitution
- Engineering Quality Strategy
- Developer Foundation Architecture
- Developer Foundation Design
- Architecture Decision Records (ADRs)

---

# Summary

Milestone 3 delivers the reusable engineering capabilities that form the Atlas Developer Foundation.

By completing this milestone, Atlas establishes a shared engineering platform that supports consistent development, verification, and maintenance across every bounded context while remaining independent of business-domain functionality.

```

```
