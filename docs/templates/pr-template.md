# Pull Request Template

```markdown
---
title: PR-XXXX — <Pull Request Title>
status: Draft
type: Architecture | Design | Implementation | Documentation | Refactor
milestone:
epic:
owner:
reviewers:
created:
last_updated:
---

# Pull Request

## Executive Summary

Provide a concise overview of this pull request.

Summarize:

- What problem is being solved.
- Why this change is necessary.
- What the expected outcome will be.

---

# Purpose

Describe the engineering responsibility of this pull request.

State the capability, architectural responsibility, or engineering improvement being introduced.

---

# Objectives

Define the expected outcomes.

Examples:

- Introduce a new architectural capability.
- Improve Engineering Quality Strategy.
- Establish shared infrastructure.
- Implement an approved design.
- Refine existing functionality.

---

# Scope

## In Scope

-

## Out of Scope

-

Explicitly documenting exclusions helps prevent scope creep.

---

# Lifecycle Phase

Select the primary phase for this pull request.

- [ ] Discovery
- [ ] Architecture
- [ ] Design
- [ ] Implementation
- [ ] Review
- [ ] Documentation
- [ ] Repository Governance

---

# Acceptance Criteria

- [ ]

- [ ]

- [ ]

Completion of this pull request is determined solely by these criteria.

---

# Architectural Impact

Does this pull request affect the platform architecture?

- [ ] Platform Architecture
- [ ] Domain Architecture
- [ ] Engineering Governance
- [ ] Developer Foundation
- [ ] Documentation Only
- [ ] No Architectural Impact

If architecture changes, reference the applicable ADR.

---

# Documentation Impact

This pull request updates the following documentation.

- [ ] Roadmap
- [ ] Milestone
- [ ] ADR
- [ ] Platform Architecture
- [ ] Engineering Documentation
- [ ] Standards
- [ ] Templates
- [ ] README
- [ ] Decision Log
- [ ] None

Documentation updates are mandatory whenever engineering intent changes.

---

# Implementation Plan

## Discovery

-

## Architecture

-

## Design

-

## Implementation

-

## Review

-

## Merge

-

Only complete the sections applicable to this pull request.

---

# Deliverables

| Deliverable | Description | Status |
| ----------- | ----------- | ------ |
|             |             | ⏳     |

---

# Dependencies

List any required pull requests, milestones, ADRs, or external dependencies.

-

---

# Risks

Identify technical, architectural, operational, or delivery risks.

For each risk, describe any mitigation strategy.

| Risk | Impact | Mitigation |
| ---- | ------ | ---------- |
|      |        |            |

---

# Validation Strategy

Describe how this pull request will be validated.

Possible validation activities include:

- Architecture Review
- Documentation Review
- Unit Testing
- Integration Testing
- End-to-End Testing
- Manual Verification
- Performance Validation
- Security Review
- Repository Consistency Review

---

# Testing Impact

Describe how this change affects the testing strategy.

Examples:

- New unit tests
- Updated fixtures
- New builders
- Shared test utilities
- No testing impact

---

# Breaking Changes

Does this pull request introduce breaking changes?

- [ ] Yes
- [ ] No

If yes, describe:

- affected components
- migration strategy
- compatibility considerations

---

# Migration Considerations

If existing functionality changes, describe:

- migration steps
- rollout strategy
- backward compatibility
- rollback plan

If not applicable, state:

> No migration required.

---

# Documentation Updates

List every document that must be created or updated.

-

---

# Related Work

## Milestone

-

## Epic

-

## ADRs

-

## Related Pull Requests

-

---

# Review Checklist

## Engineering

- [ ] Scope is well defined.
- [ ] Acceptance criteria are complete.
- [ ] Risks have been assessed.
- [ ] Dependencies are documented.

## Architecture

- [ ] Architecture remains consistent.
- [ ] Boundaries are respected.
- [ ] No unintended coupling introduced.
- [ ] ADR updated if required.

## Documentation

- [ ] Documentation reflects the implementation.
- [ ] Cross-references are correct.
- [ ] Naming follows the Domain Glossary.
- [ ] Repository consistency maintained.

## Testing

- [ ] Validation strategy executed.
- [ ] Tests added or updated where applicable.
- [ ] Existing tests continue to pass.

## Governance

- [ ] Engineering Constitution respected.
- [ ] Architecture Lifecycle followed.
- [ ] Roadmap updated if necessary.
- [ ] Milestone updated if necessary.

---

# Completion Criteria

This pull request is ready to merge when:

- Acceptance criteria are satisfied.
- Required reviews are approved.
- Documentation is complete.
- Validation activities have passed.
- Repository consistency has been verified.
- Governance requirements have been satisfied.

---

# Related Documents

- Engineering Constitution
- Architecture Lifecycle
- Roadmap
- Milestone
- Epic
- Architecture Decision Records (ADRs)
- Platform Architecture
- Engineering Standards
- Repository Conventions
```
