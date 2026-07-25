# Engineering Playbook

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Last Updated:** July 16, 2026

---

# Purpose

The Engineering Playbook describes **how we build software**.

Where the Constitution defines our engineering philosophy, the Playbook defines the practical standards, conventions, workflows, and practices used when developing this platform.

It is the operational guide for contributors.

Every implementation should follow the standards documented here.

---

# Relationship to Other Documentation

The project documentation follows a clear hierarchy.

```
Constitution
      │
      ▼
Architecture Decision Records (ADRs)
      │
      ▼
Engineering Playbook
      │
      ▼
Implementation
```

Each layer answers a different question.

| Document     | Purpose                                      |
| ------------ | -------------------------------------------- |
| Constitution | What principles guide engineering decisions? |
| ADRs         | What architectural decisions have we made?   |
| Playbook     | How do we implement those decisions?         |
| Source Code  | How is the system implemented?               |

The Playbook should never contradict the Constitution.

If implementation guidance conflicts with the Constitution, the Constitution takes precedence.

---

# Scope

The Playbook covers:

- Coding standards
- Project structure
- Architecture conventions
- Testing practices
- Logging
- Error handling
- Code review
- Git workflow
- Pull request process
- Release process
- Decision making
- Documentation standards

The Playbook intentionally does **not** define business rules.

---

# Guiding Principles

Every standard within the Playbook should reinforce the principles defined in the Constitution.

In particular:

- Simplicity over cleverness.
- Explicitness over magic.
- Consistency over personal preference.
- Maintainability over short-term speed.
- Domain-first design.
- Infrastructure independence.
- Continuous improvement.

---

# Organization

The Playbook is divided into focused sections.

```
playbook/
│
├── README.md
│
├── coding/
├── architecture/
├── quality/
├── workflow/
└── decision-making/
```

Each document addresses a single engineering concern.

Large documents should be split before they become difficult to maintain.

---

# Coding Standards

The **coding** section defines implementation conventions.

Topics include:

- Project structure
- Naming conventions
- TypeScript standards
- Import organization
- Comments and documentation
- Formatting

These standards aim to eliminate unnecessary variation across the codebase.

---

# Architecture Standards

The **architecture** section explains how application components should be designed and interact.

Topics include:

- Dependency rules
- Controllers
- Use Cases
- Domain models
- Repositories
- Configuration
- Transactions
- Dependency Injection

Architecture standards define responsibilities rather than implementation details.

---

# Quality Standards

The **quality** section describes practices that improve software reliability.

Topics include:

- Testing strategy
- Error handling
- Logging
- Observability
- Code review

Quality standards evolve alongside the platform and should be revisited periodically.

---

# Workflow Standards

The **workflow** section documents how engineering work progresses from idea to production.

Topics include:

- Git workflow
- Branching strategy
- Pull requests
- Commit conventions
- Releases

The goal is consistency across all contributions.

---

# Decision-Making Standards

Not every engineering problem requires an abstraction or a new dependency.

The **decision-making** section provides structured guidance before introducing:

- Libraries
- Frameworks
- Architectural patterns
- Shared abstractions
- Cross-cutting infrastructure

These checklists help maintain a deliberate, sustainable architecture.

---

# Documentation Philosophy

Documentation is part of the product.

Documentation should:

- Explain intent.
- Remain concise.
- Stay synchronized with implementation.
- Avoid duplication.
- Reference related documents when appropriate.

Documentation should evolve continuously rather than through occasional large rewrites.

---

# Contributing to the Playbook

Every contributor is encouraged to improve the Playbook.

Changes should:

- solve a recurring engineering problem;
- improve clarity;
- remain consistent with the Constitution; and
- avoid documenting personal preferences without clear justification.

The Playbook is a living document.

---

# Versioning

The Playbook follows semantic versioning.

- Major versions indicate structural or philosophical changes.
- Minor versions introduce new standards or significantly expand existing guidance.
- Patch versions improve wording, examples, or clarity without changing intent.

Version history should be recorded within the repository.

---

# Review Process

Changes to the Playbook should receive the same level of review as production code.

Reviewers should consider:

- clarity;
- consistency;
- practicality;
- alignment with the Constitution; and
- long-term maintainability.

The goal is not to create more rules, but to reduce ambiguity.

---

# Evolution

The Playbook will expand as the platform grows.

New standards should be introduced only when:

- a recurring pattern emerges;
- an architectural decision requires implementation guidance; or
- an existing standard no longer serves the project.

The Playbook should remain focused, modular, and easy to navigate.

---

# Closing Statement

Engineering excellence is achieved through consistent habits rather than isolated moments of brilliance.

The Engineering Playbook exists to capture those habits, making them repeatable across contributors, features, and years of development.

By following these standards, we reduce unnecessary decisions, improve collaboration, and build a platform that remains understandable long after its original implementation.

# Authority

| Priority | Document          | Purpose                                  |
| -------- | ----------------- | ---------------------------------------- |
| 1        | Constitution      | Defines engineering principles           |
| 2        | ADRs              | Records accepted architectural decisions |
| 3        | Playbook          | Defines implementation standards         |
| 4        | Architecture Docs | Explain system design                    |
| 5        | Epic Docs         | Describe planned work                    |
| 6        | Roadmap           | Planning and sequencing                  |
