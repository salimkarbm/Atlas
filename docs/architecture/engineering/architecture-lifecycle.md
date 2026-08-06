---
title: Atlas Architecture Lifecycle
status: Accepted
version: 1.0
owner: Architecture
last_updated: 2026-07-29
---

# Atlas Architecture Lifecycle

## Purpose

The Atlas Architecture Lifecycle defines the standard engineering workflow for introducing significant changes to the platform.

It establishes a consistent process for evolving Atlas through deliberate architectural planning, disciplined design, implementation, and review.

The lifecycle ensures that engineering decisions are intentional, traceable, and aligned with the Engineering Constitution.

---

# Guiding Principles

The Architecture Lifecycle is governed by the following principles:

- Architecture precedes implementation.
- Design refines architecture; it does not replace it.
- Implementation realizes an approved design.
- Every significant change is reviewable.
- Documentation evolves alongside implementation.
- Every phase produces clear, reviewable artifacts.

---

# Lifecycle Overview

Every significant engineering initiative follows the same lifecycle.

```text
Discovery
    ↓
Architecture
    ↓
Design
    ↓
Implementation
    ↓
Review
    ↓
Merge
```

Each phase has a distinct responsibility and completion criteria.

---

# Phase 1 — Discovery

## Objective

Understand the problem before proposing a solution.

Discovery defines why work is required and establishes the context for architectural decisions.

## Activities

- Define the problem.
- Identify objectives.
- Document business motivation.
- Define scope.
- Identify assumptions.
- Identify constraints.
- Establish success criteria.

## Deliverables

- Problem Statement
- Objectives
- Scope Definition
- Assumptions
- Constraints
- Success Criteria

## Exit Criteria

Discovery is complete when the problem is well understood and the Architecture phase can begin without ambiguity.

---

# Phase 2 — Architecture

## Objective

Define the canonical architectural solution.

Architecture establishes responsibilities, boundaries, principles, and relationships without introducing implementation details.

## Activities

- Define architectural responsibilities.
- Establish boundaries.
- Model capabilities.
- Produce canonical documentation.
- Identify architectural decisions.
- Create or update ADRs where required.

## Deliverables

Examples include:

- Platform Models
- Architecture Documents
- Context Maps
- Capability Models
- Architecture Decision Records

## Exit Criteria

Architecture is complete when the proposed solution has been reviewed and accepted as the canonical model for subsequent design work.

---

# Phase 3 — Design

## Objective

Translate approved architecture into an implementation-ready design.

Design specifies how the approved architecture will be realized while preserving its intent.

## Activities

- Design module structure.
- Define interfaces.
- Specify data models.
- Describe workflows.
- Produce technical specifications.
- Refine implementation details.

## Deliverables

Examples include:

- Technical Design Documents
- Module Designs
- Interface Specifications
- Sequence Diagrams
- Data Models

## Exit Criteria

Design is complete when implementation can proceed without requiring additional architectural decisions.

---

# Phase 4 — Implementation

## Objective

Build the approved design.

Implementation realizes the architecture and design through source code, configuration, infrastructure, and supporting documentation.

## Activities

- Develop functionality.
- Update documentation.
- Create automated tests.
- Perform validation.
- Address review feedback.

## Deliverables

Examples include:

- Source Code
- Configuration
- Automated Tests
- Supporting Documentation

## Exit Criteria

Implementation is complete when the acceptance criteria have been satisfied and the change is ready for engineering review.

---

# Phase 5 — Review

## Objective

Verify that the implementation satisfies its architectural, engineering, and quality objectives.

Review confirms that the work complies with the Engineering Constitution and project standards.

## Activities

- Engineering Review
- Architecture Review
- Documentation Review
- Validation
- Risk Assessment

## Deliverables

- Engineering Review
- Review Feedback
- Approval Decision

## Exit Criteria

Review is complete when all required approvals have been obtained and outstanding issues have been resolved or formally deferred.

---

# Phase 6 — Merge

## Objective

Integrate the approved work into the repository.

Merge represents formal acceptance of the change.

## Activities

- Final verification.
- Merge approval.
- Repository update.
- Roadmap or milestone updates where applicable.

## Deliverables

- Merged Pull Request
- Updated Documentation
- Repository History

## Exit Criteria

The work becomes part of the accepted project baseline.

---

# Phase Responsibilities

| Phase          | Primary Responsibility  |
| -------------- | ----------------------- |
| Discovery      | Understand the problem  |
| Architecture   | Define the solution     |
| Design         | Plan the implementation |
| Implementation | Build the solution      |
| Review         | Validate the solution   |
| Merge          | Accept the solution     |

---

# Governance

The Architecture Lifecycle applies to:

- Engineering initiatives
- Platform capabilities
- Developer Foundation
- Business modules
- Significant architectural changes
- Repository governance updates

Minor maintenance activities, documentation corrections, and routine bug fixes may use an abbreviated lifecycle where appropriate.

---

# Relationship to Other Documents

The Architecture Lifecycle complements the following governance documents:

- Engineering Constitution
- Atlas Roadmap
- Milestone Documentation
- Architecture Decision Records
- Pull Request Template
- Engineering Review Process

The lifecycle defines **how** work progresses, while these documents define **what** is being built and **why** decisions are made.

---

# Compliance

Every significant pull request should clearly identify its current lifecycle phase.

Examples include:

- Discovery
- Architecture
- Design
- Implementation
- Review

A pull request should not advance to the next phase until the objectives of the current phase have been satisfied.

---

# Summary

The Atlas Architecture Lifecycle provides a disciplined, repeatable approach to engineering work.

By separating Discovery, Architecture, Design, Implementation, Review, and Merge into distinct phases, Atlas promotes thoughtful decision-making, preserves architectural integrity, and ensures that the platform evolves in a consistent and maintainable manner.

```

```
