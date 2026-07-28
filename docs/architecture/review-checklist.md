---
title: Architecture Review Checklist
status: Living
version: 1.0
owner: Architecture
last_updated: 2026-07-25
---

---

# Architecture Review Checklist

## Purpose

The Architecture Review Checklist provides a consistent framework for evaluating architectural deliverables before they are accepted into the Atlas repository.

Its purpose is to ensure that architectural artifacts are complete, internally consistent, aligned with the Engineering Constitution, and compatible with the established Platform Architecture.

This checklist applies to Platform Architecture, Domain Architecture, and Architecture Decision Records.

---

# Review Principles

Architecture reviews should verify that proposed changes:

- Preserve conceptual integrity.
- Maintain consistency across the repository.
- Respect established architectural boundaries.
- Introduce no unnecessary complexity.
- Remain independent of implementation details.

The objective of an architecture review is to improve the quality and longevity of the platform rather than to evaluate implementation choices.

---

# Review Checklist

## 1. Scope Validation

Confirm that the proposed work belongs to the Architecture phase.

- [ ] The scope is architectural in nature.
- [ ] No implementation details are introduced.
- [ ] No design decisions are introduced unless explicitly within scope.
- [ ] The objectives of the pull request are clearly defined.

---

## 2. Platform Consistency

Confirm consistency with the canonical Platform Architecture.

- [ ] The Atlas Platform Model is respected.
- [ ] Terminology matches the Domain Glossary.
- [ ] Context boundaries remain consistent with the Context Map.
- [ ] Ownership semantics remain consistent with the Ownership Model.
- [ ] Data governance remains consistent with the Data Classification model.

---

## 3. Engineering Governance

Confirm compliance with the Engineering Constitution.

- [ ] Documentation is treated as a first-class deliverable.
- [ ] Architecture precedes implementation.
- [ ] Architectural boundaries are respected.
- [ ] Repository governance is preserved.
- [ ] Simplicity is preferred over unnecessary complexity.

---

## 4. Architecture Decisions

Confirm that architectural decisions are properly documented.

- [ ] New architectural decisions are supported by an ADR where appropriate.
- [ ] Existing ADRs remain valid.
- [ ] Any superseded decisions are explicitly documented.
- [ ] Architectural rationale is clearly explained.

---

## 5. Cross-Document Consistency

Confirm consistency across architectural documentation.

- [ ] Cross-references are accurate.
- [ ] Document responsibilities do not overlap.
- [ ] Duplicate concepts have been eliminated.
- [ ] Every concept has a single canonical owner.

---

## 6. Technology Independence

Confirm that the architecture remains implementation-agnostic.

- [ ] No programming language assumptions.
- [ ] No framework-specific assumptions.
- [ ] No database-specific assumptions.
- [ ] No infrastructure-specific assumptions.
- [ ] No deployment-specific assumptions.

---

## 7. Documentation Quality

Confirm that the documentation meets repository standards.

- [ ] Purpose is clearly stated.
- [ ] Scope is clearly defined.
- [ ] Structure is logical and consistent.
- [ ] Terminology is consistent.
- [ ] References are complete.
- [ ] Grammar and formatting have been reviewed.

---

# Review Outcome

Every architecture review should conclude with one of the following outcomes.

## Accepted

The architecture satisfies all review criteria and may be merged.

---

## Accepted with Minor Revisions

Minor documentation improvements are required before merge.

No architectural changes are necessary.

---

## Revisions Required

Architectural issues have been identified.

The review should be repeated after the issues have been addressed.

---

## Rejected

The proposal is inconsistent with the Platform Architecture, Engineering Constitution, or accepted Architecture Decision Records.

A revised proposal should be submitted through a new review.

---

# Governance

This checklist is part of the Atlas Architecture governance process.

It should be applied consistently to every significant architectural change and reviewed periodically to ensure it continues to support the long-term evolution of the platform.

Updates to this checklist should follow the project's standard pull request process and remain consistent with the Engineering Constitution.
