---
title: Atlas Roadmap
status: Living
version: 1.0
owner: Product & Architecture
last_updated: 2026-07-23
---

# Atlas Roadmap

## Purpose

The Atlas Roadmap defines the long-term evolution of the platform.

It provides a high-level view of milestones, epics, and the current development focus.

The roadmap is a navigation document. It does not contain implementation details or architectural decisions. Those are documented in milestone documents and Architecture Decision Records (ADRs).

---

## Roadmap Principles

The roadmap follows these principles:

- Milestones represent major phases in Atlas's evolution.
- Epics represent capabilities delivered within a milestone.
- Pull Requests deliver incremental work within an epic.
- Every roadmap item has a single owner and a clear objective.
- The roadmap evolves through the standard pull request process.

---

# Milestone Overview

---

## Milestone 1 — Engineering Foundation

**Theme**

Build the engineering system that supports Atlas.

**Status**

✅ Complete

**Objective**

Establish the engineering, governance, documentation, and persistence foundations required before product development begins.

**Documentation**

See:

`docs/product/milestones/milestone-1.md`

---

## Milestone 2 — Platform Architecture

**Theme**

Define the Atlas platform model.

**Status**

🟢 Complete

**Objective**

Define the Atlas Core Domain Model, ubiquitous business language, platform boundaries, bounded contexts, ownership model, authorization model, and canonical relationships that govern all future platform capabilities.

**Documentation**

See:

`docs/product/milestones/milestone-2.md`

---

## Milestone 3 — Developer Foundation

**Theme**

Build the engineering capabilities that every business module depends upon.

**Objective**
Provide the shared tooling, conventions, and infrastructure required to develop, test, and maintain Atlas consistently.

This milestone is about developer experience, Engineering Quality Strategy, and productivity—not business functionality

**Status**

🟢 Planned

---

## Roadmap Horizon

The Atlas roadmap evolves incrementally through approved milestones.

Each milestone establishes a stable foundation for the next, ensuring that engineering, architecture, and platform capabilities mature in a deliberate and sustainable manner.

Future milestones will be introduced only after the successful completion and review of preceding milestones.

---

# Current Focus

Current Milestone

Milestone 3

Engineering Capabilities

Next Pull Request

PR-0008.0

Engineering Capabilities

```

---

## Recently Completed

- Engineering Foundation
- Platform Foundation
- Foundational Architecture Decision Records
- Architecture Governance

---

# Atlas Evolution

Engineering Foundation
│
▼
Platform Architecture
│
▼
Engineering Capabilities
│
▼
Core Platform
│
▼
Processing Platform
│
▼
Delivery Platform
│
▼
Developer Platform
│
▼
Enterprise Platform

## Roadmap Governance

The roadmap is a living architectural planning document.

Changes to milestones, epics, sequencing, or major platform direction must be reviewed and approved through the project's standard engineering governance process.

Milestones should conclude with an engineering review before subsequent architectural phases begin.

The roadmap reflects the accepted strategic direction of Atlas and should remain consistent with the Engineering Constitution and other canonical project documentation.

# Milestone 1

Engineering Foundation
│
▼
Milestone 2
Platform Architecture
│
▼
Milestone 3
Engineering Capabilities
│
▼
Milestone 4
Core Platform

Future Platform Capabilities

## Roadmap Scope

The roadmap defines _what_ Atlas intends to accomplish and _when_ major engineering and architectural phases occur.

It intentionally does not define _how_ those phases are implemented. Detailed planning belongs to milestone documents, architectural decisions belong to ADRs, and implementation details belong to pull requests.

This separation of responsibilities ensures that the roadmap remains stable, concise, and focused on the long-term evolution of the platform.
```
