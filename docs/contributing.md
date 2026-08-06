---
title: Contributing Guide
status: Accepted
version: 1.0
owner: Engineering
last_updated: 2026-07-30
---

# Contributing Guide

## Purpose

This guide defines the standard engineering workflow for contributing to the Atlas repository.

It complements the Architecture documentation by describing how engineering work is planned, implemented, reviewed, and merged.

This document focuses on **engineering workflow** rather than architectural principles.

---

# Scope

These guidelines apply to all contributors working on Atlas, regardless of the bounded context or engineering capability being implemented.

---

# Engineering Philosophy

Atlas is engineered as a long-lived platform.

Contributors should prioritize:

- Clarity over cleverness.
- Simplicity over unnecessary abstraction.
- Maintainability over short-term convenience.
- Incremental evolution over speculative design.
- Architectural consistency over individual preference.

---

# Development Workflow

All work should be performed through Pull Requests.

Each Pull Request should deliver a single, well-defined engineering objective.

The recommended workflow is:

```text
Pull Request
        ↓
Implementation Tasks
        ↓
Capability Review
        ↓
Framework Review (if applicable)
        ↓
API / Design Review
        ↓
──────────────
DESIGN FREEZE
──────────────
        ↓
Implementation
        ↓
Verification
        ↓
Engineering Review
        ↓
Merge
```

---

# Pull Request Principles

Each Pull Request should:

- Deliver one cohesive capability.
- Minimize unrelated changes.
- Preserve a reviewable history.
- Include any required documentation updates.
- Be independently verifiable.

Large initiatives should be divided into multiple Pull Requests.

---

# Capability-First Development

Every implementation task begins by defining the capability being delivered.

A capability describes the engineering responsibility introduced into Atlas rather than the implementation technique.

Examples:

- Atlas provides structured logging.
- Atlas provides repository infrastructure.
- Atlas provides a shared testing environment.

---

# Design Before Implementation

Implementation should begin only after the capability and public API have been reviewed.

Design should answer:

- What capability is being delivered?
- What is the public API?
- What responsibilities belong to this capability?
- What is intentionally out of scope?

---

# Design Freeze

Once implementation begins, the approved design is considered frozen.

Design changes should occur only when implementation reveals:

- Framework limitations
- Compiler constraints
- Verification failures
- Previously undiscovered architectural inconsistencies

Implementation preference alone is not sufficient reason to redesign a capability.

---

# Implementation Guidelines

Contributors should:

- Implement the approved design.
- Keep responsibilities focused.
- Prefer the smallest correct implementation.
- Avoid speculative abstractions.
- Avoid introducing unused extension points.
- Maintain existing architectural boundaries.

---

# Public API Guidelines

Capability modules should expose only their intentional public surface.

Public exports may include:

- Interfaces
- Types
- Enums
- Value Objects
- Public operations

Implementation details should remain internal to the capability.

---

# Verification

Every Pull Request should complete the appropriate verification activities before review.

Verification may include:

- Type checking
- Automated tests
- Static analysis
- Dependency analysis
- Architecture validation
- Documentation validation

Verification should succeed before requesting review.

---

# Engineering Review

Engineering review evaluates:

- Architectural alignment
- Design quality
- Responsibility boundaries
- API quality
- Maintainability
- Simplicity
- Documentation
- Verification results

Review feedback should strengthen the platform rather than simply approve code.

---

# Documentation

Documentation is a first-class engineering artifact.

Contributors should update documentation whenever changes affect:

- Architecture
- Engineering capabilities
- Public APIs
- Repository structure
- Engineering workflows

Documentation should evolve alongside implementation.

---

# Relationship to Other Documents

This guide complements:

- Engineering Constitution
- Engineering Quality Strategy
- Architecture Lifecycle
- Architecture Decision Records (ADRs)
- Developer Foundation documentation

If conflicts arise, the Engineering Constitution takes precedence.

---

# Summary

This Contributing Guide defines the standard engineering workflow for Atlas contributors.

By following these practices, contributors help preserve architectural consistency, maintain engineering quality, and enable the long-term evolution of the platform.

```

```
