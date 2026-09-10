# Milestone 4 — Platform Runtime & Business Foundation

## 1. Purpose

Milestone 4 establishes the production-grade runtime, business-boundary, identity, organization, authorization, persistence, integration, and security foundations required for Atlas to evolve into a multi-tenant Digital Asset Management platform.

This milestone converts the architectural decisions established during the Platform Foundation and Developer Foundation milestones into a production implementation foundation.

The milestone is intentionally architecture-first. It does not attempt to implement the complete Atlas product or introduce business capabilities before their ownership and boundaries are justified.

The primary objective is to establish a platform capable of safely supporting independently owned business capabilities as bounded contexts.

---

# 2. Milestone Objective

Milestone 4 establishes:

- the production runtime composition boundary
- bounded-context module structure
- module layer ownership and dependency rules
- identity foundations
- organization and membership foundations
- tenant context
- authorization foundations
- persistence and transaction boundaries
- integration contracts and reliable event publication
- security boundaries and hardening
- application/API integration
- production validation of the complete foundation

The milestone must leave Atlas with a coherent vertical foundation through which a request can progress from an authenticated actor to an organization-scoped, authorized business operation and ultimately to persistence.

The intended foundational flow is:

```text
User
  ↓
Authenticate
  ↓
Authenticated Actor
  ↓
Organization
  ↓
Membership
  ↓
Active Organization
  ↓
Authorization
  ↓
Protected Application Operation
  ↓
Domain Rules
  ↓
Persistence
```

This flow establishes the platform foundation without prematurely implementing DAM-specific capabilities.

---

# 3. Architectural Principles

Milestone 4 follows the existing Atlas architectural principles.

## 3.1 Bounded Contexts Are the Primary Business Boundary

Each business capability belongs to exactly one bounded context.

A bounded context owns:

- its business rules
- domain model
- application behavior
- infrastructure implementations
- external interfaces

A business concept must have one canonical owner.

Cross-context collaboration must use explicitly defined contracts or integration mechanisms rather than direct access to another context's internal implementation.

---

## 3.2 Module Structure

Business capabilities are organized under:

```text
src/modules/<bounded-context>/
├── domain/
├── application/
├── infrastructure/
└── interfaces/
```

Each module owns these layers as part of a single bounded context.

Platform-level directories remain separate:

```text
src/core/
src/application/
src/infrastructure/
```

`src/core/` provides shared Developer Foundation capabilities.

`src/application/` provides runtime and application composition responsibilities.

`src/infrastructure/` provides shared platform infrastructure.

Business-context-specific infrastructure belongs inside its owning module.

---

## 3.3 Dependency Direction

Within a bounded context:

```text
interfaces
    ↓
application
    ↓
domain
```

Infrastructure implements contracts defined by inner layers.

The domain must remain independent of:

- infrastructure
- frameworks
- transport mechanisms
- persistence technologies
- external delivery mechanisms

Application code must not depend directly on infrastructure implementations.

Interfaces must not bypass the application/domain boundaries to directly depend on infrastructure.

---

## 3.4 Core Isolation

The shared Developer Foundation remains independent of business modules and platform implementation details.

The dependency rule is:

```text
core
  ✕ application
  ✕ infrastructure
  ✕ modules
```

Core capabilities must remain reusable without requiring knowledge of Atlas business domains.

---

## 3.5 Architecture Before Abstraction

Milestone 4 does not introduce generic abstractions merely because a pattern could theoretically be useful.

The following are explicitly avoided unless a concrete domain requirement justifies them:

- generic `BaseService`
- generic `BaseRepository`
- generic `BaseUseCase`
- generic command/query framework
- generic event bus
- generic plugin framework
- speculative cross-context framework
- unnecessary shared utility abstractions

A reusable abstraction must emerge from a demonstrated architectural need.

---

# 4. Scope

Milestone 4 covers the following foundational areas.

## 4.1 Runtime & Module Foundation

Establish the runtime composition boundary and the physical module structure required for bounded contexts.

This includes:

- application bootstrap
- application kernel
- infrastructure composition
- module boundary
- module layer ownership
- dependency enforcement
- runtime behavioral proof

It does not introduce a concrete business bounded context.

---

## 4.2 Identity

Establish the foundation for representing and authenticating users.

Key principles:

- a user may exist before belonging to any organization
- authentication establishes identity
- authentication does not establish authorization
- authenticated actors are represented through an explicit boundary
- session/token mechanisms remain behind appropriate abstractions
- authentication state must be independently testable

---

## 4.3 Organization & Membership

Establish the tenant and organizational operating boundary.

Key principles:

- an organization represents a tenant/operational boundary
- membership connects users to organizations
- membership is distinct from user identity
- active organization is contextual state rather than identity
- organization membership must be established before organization-scoped operations are authorized

---

## 4.4 Authorization

Establish authorization as an explicit platform concern.

Authorization evaluates:

```text
Actor
+
Organization
+
Action
+
Resource
```

Global/system roles and organization roles remain conceptually distinct.

Authorization determines whether an actor has authority to perform an operation.

Domain logic remains responsible for determining whether the operation itself is valid according to business rules.

---

## 4.5 Persistence

Establish production persistence boundaries.

The intended dependency flow is:

```text
Domain
  ↓
Repository Contract
  ↓
Infrastructure
  ↓
PostgreSQL
```

ORM-specific implementation details remain inside infrastructure.

Transaction boundaries must be explicit.

Persistence implementation must not leak ORM concerns into domain models.

---

## 4.6 Integration

Establish reliable communication between bounded contexts and external integration boundaries.

Key principles:

- explicit contracts
- explicit integration events
- no direct cross-context internal imports
- reliable event publication
- transactional outbox
- idempotent consumers

Integration mechanisms must preserve bounded-context ownership.

---

## 4.7 Security

Establish defense-in-depth across the platform.

Security concerns include:

- authentication
- tenant context
- membership validation
- authorization
- domain validation
- persistence isolation
- password hashing
- session invalidation
- secret handling
- secure error handling
- rate limiting
- invitation security
- auditability
- tenant isolation

Client-supplied organization identifiers must never be treated as proof of membership or authority.

---

## 4.8 Testing & Validation

Milestone 4 establishes production-level validation across architectural and behavioral boundaries.

Testing includes:

- unit tests
- domain tests
- application tests
- infrastructure tests
- integration tests
- contract tests
- security tests
- API tests
- end-to-end tests
- architecture tests

Coverage remains evidence rather than the objective.

The objective is meaningful behavioral confidence.

---

# 5. Design Phase

The following M4 design activities were completed before implementation.

| Design Area                                      | Status   |
| ------------------------------------------------ | -------- |
| M4-D1 Runtime & Module Design                    | Complete |
| M4-D2 Identity Design                            | Complete |
| M4-D3 Organization Design                        | Complete |
| M4-D4 Authorization Design                       | Complete |
| M4-D5 Integration Design                         | Complete |
| M4-D6 Persistence Design                         | Complete |
| M4-D7 Security Design                            | Complete |
| M4-D8 Testing & Validation Design                | Complete |
| M4-D9 Milestone 4 Design Review                  | PASS     |
| M4-IR1 Implementation Readiness & Work Breakdown | PASS     |

Implementation therefore proceeds from an approved architectural baseline rather than redefining the architecture during implementation.

If implementation discovery requires an architectural change, the change must be handled through the established architecture/ADR process rather than silently modifying the approved design.

---

# 6. Implementation Plan

Milestone 4 is implemented through focused PRs.

## M4-I1 — Runtime & Module Foundation

Establish:

- runtime composition boundary
- module boundary
- module layer structure
- dependency rules
- architecture enforcement
- runtime behavioral proof

Explicit non-goals:

- users
- authentication
- sessions
- organizations
- memberships
- authorization
- roles
- permissions
- assets
- storage
- events/outbox
- queues
- search
- delivery
- generic application frameworks

The first implementation must remain a foundation rather than a business feature.

---

## M4-I2 — Identity

Implement the Identity bounded context and establish the first concrete business module.

Expected ownership:

```text
src/modules/identity/
├── domain/
├── application/
├── infrastructure/
└── interfaces/
```

The implementation establishes the user identity and authentication foundation required by subsequent platform capabilities.

---

## M4-I3 — Organization & Membership

Implement organization and membership capabilities.

Expected responsibilities include:

- organizations
- memberships
- membership lifecycle
- organization context
- active organization selection/context

Organization membership becomes the basis for tenant-scoped authorization.

---

## M4-I4 — Authorization

Implement authorization boundaries.

Responsibilities include:

- actor authorization
- organization-scoped authority
- role concepts where justified
- authorization decisions
- protected application operations

Authorization must remain separate from domain business validation.

---

## M4-I5 — Persistence & Transactions

Complete production persistence integration.

Responsibilities include:

- repository implementations
- persistence mappings
- transaction boundaries
- database integration
- tenant-aware persistence
- persistence integration tests

Existing persistence foundations established during earlier milestones should be extended rather than unnecessarily rebuilt.

---

## M4-I6 — Integration & Outbox

Implement reliable integration mechanisms.

Responsibilities include:

- integration contracts
- integration events
- transactional outbox
- event persistence
- publication boundary
- consumer idempotency
- integration testing

Cross-context communication must remain explicit.

---

## M4-I7 — Security Hardening

Apply security controls across the implemented platform foundation.

Responsibilities include:

- authentication hardening
- credential security
- session invalidation
- tenant isolation
- authorization enforcement
- secure errors
- secret handling
- rate limiting
- invitation security
- audit-related foundations

Security must be tested behaviorally rather than treated solely as configuration.

---

## M4-I8 — API & Application Integration

Connect the implemented platform capabilities through the application/API boundary.

The application layer coordinates the platform capabilities without becoming a replacement for bounded-context application layers.

The API must enforce:

```text
authentication
    ↓
tenant context
    ↓
membership
    ↓
authorization
    ↓
application operation
    ↓
domain validation
```

---

## M4-I9 — Full Validation

Perform final milestone validation across:

- architecture
- type checking
- linting
- dependency analysis
- unit tests
- integration tests
- security tests
- API tests
- end-to-end tests
- build
- production runtime behavior

All required repository quality gates must pass before Milestone 4 is closed.

---

# 7. Runtime Foundation

The application runtime is organized around the existing composition boundary:

```text
Process Entry Point
        ↓
Application Bootstrap
        ↓
Application Kernel
        ↓
Infrastructure Composition
        ↓
Application Server
```

The process entry point is responsible for starting the application and handling process-level lifecycle events.

The application bootstrap coordinates startup.

The application kernel owns application initialization and shutdown responsibilities.

Infrastructure composition remains behind the application boundary.

The HTTP server remains a transport/composition concern.

The runtime foundation must not contain business-specific behavior.

---

# 8. First Vertical Slice

The first meaningful platform slice is:

```text
User
  ↓
Authenticate
  ↓
Authenticated Actor
  ↓
Organization
  ↓
Membership
  ↓
Active Organization
  ↓
Authorization
  ↓
Protected Application Operation
  ↓
Persistence
```

This vertical slice is the primary architectural proof for Milestone 4.

It demonstrates that the platform can carry an authenticated request through identity, tenancy, authorization, application behavior, domain rules, and persistence without violating the established boundaries.

---

# 9. Tenant Isolation

Tenant isolation is a platform-wide invariant.

An organization-scoped operation must establish organization context through trusted server-side state.

A client-provided organization identifier is only an input.

It is not proof of:

- membership
- role
- authorization
- tenant ownership

The platform must independently establish:

```text
Authenticated Actor
        ↓
Organization Context
        ↓
Membership
        ↓
Authorization
```

Persistence must provide additional isolation guarantees where appropriate.

Tenant isolation must be explicitly tested.

---

# 10. Integration Boundaries

Bounded contexts must not collaborate by reaching into one another's internal implementation.

Invalid:

```text
Identity Domain
    ↓
Organization Domain Internal Class
```

Preferred:

```text
Identity
    ↓
Explicit Contract / Integration Mechanism
    ↓
Organization
```

For asynchronous integration:

```text
Domain Transaction
      ↓
Outbox Record
      ↓
Event Publication
      ↓
Consumer
      ↓
Idempotent Processing
```

The outbox mechanism exists to ensure that business state and the corresponding integration event cannot become inconsistent through independent commits.

---

# 11. Testing Strategy

Testing follows the architectural boundaries.

## Core

Core requires complete executable-path coverage and explicit behavioral tests for its public APIs and invariants.

Interfaces, types, empty modules, and pure barrels do not require artificial coverage.

---

## Domain

Domain tests prove:

- invariants
- business rules
- state transitions
- invalid states
- domain errors

---

## Application

Application tests prove:

- orchestration
- authorization interaction
- repository contract usage
- transaction behavior
- application-level rules

---

## Infrastructure

Infrastructure tests prove:

- persistence behavior
- mappings
- repository implementations
- transaction behavior
- external system integration

---

## Integration

Integration tests prove collaboration between real platform components.

---

## Architecture

Architecture tests prove:

- dependency direction
- bounded-context isolation
- Core isolation
- absence of forbidden dependencies
- absence of circular dependencies

Dependency-cruiser is the primary mechanical enforcement mechanism for these repository-level dependency rules.

---

## Security

Security tests explicitly verify:

- unauthorized access
- cross-tenant access attempts
- invalid membership
- privilege escalation attempts
- invalid authentication
- session invalidation
- secure error behavior

---

# 12. Architecture Enforcement

Architecture rules are enforced through `dependency-cruiser`.

The repository CI pipeline executes architecture checks independently:

```text
Check Architecture
      ↓
Type Check
      ↓
Lint
      ↓
Dependency Analysis
      ↓
Tests
      ↓
Build
```

Architecture violations therefore fail CI independently of compilation or test success.

The dependency rules enforce the major boundaries between:

- Core
- Application
- Infrastructure
- Modules
- Module layers

Circular dependencies are forbidden.

---

# 13. Documentation Requirements

Milestone 4 implementation must keep architecture documentation synchronized with the repository.

Documentation is updated when implementation establishes or materially changes:

- architectural boundaries
- ownership
- dependency rules
- security invariants
- integration contracts
- persistence rules
- testing strategy

Implementation details that do not represent durable architectural knowledge should remain in the code and PR rather than generating unnecessary standalone documentation.

Architecture-changing discoveries require the appropriate ADR/design update.

---

# 14. Explicit Non-Goals

Milestone 4 does not attempt to implement the full DAM product.

The following remain outside the milestone unless explicitly introduced through the approved implementation sequence:

- asset management
- file upload workflows
- object storage
- image/video processing
- thumbnails
- AI analysis
- metadata extraction
- search
- CDN delivery
- signed delivery URLs
- transformations
- billing
- webhooks for product capabilities
- queues/workers beyond foundations required by approved architecture
- speculative microservices
- generic plugin architecture
- generalized framework abstractions

The milestone establishes the platform foundation on which these capabilities can later be built safely.

---

# 15. Quality Gates

Milestone 4 cannot be considered complete until all applicable quality gates pass.

Required repository gates include:

```text
npm run depcruise
npm run typecheck
npm run lint
npm run knip
npm test
npm run build
```

Additional integration, security, API, and end-to-end validation must pass where introduced by the corresponding implementation PRs.

A passing build alone does not constitute milestone completion.

---

# 16. Completion Criteria

Milestone 4 is complete when:

1. The production runtime composition boundary is established.
2. Bounded contexts have a clearly defined module structure.
3. Module layer dependencies are mechanically enforced.
4. Core remains independent of business modules and platform infrastructure.
5. Identity and authentication foundations are implemented.
6. Organizations and memberships establish tenant context.
7. Authorization is explicit and organization-aware.
8. Persistence and transaction boundaries are production-ready.
9. Cross-context integration uses explicit contracts and reliable event mechanisms.
10. Security controls are enforced across the request lifecycle.
11. Tenant isolation is explicitly tested.
12. The first complete vertical slice works end-to-end.
13. Architecture, behavioral, integration, and security tests provide meaningful confidence.
14. All repository quality gates pass.
15. Documentation accurately reflects the implemented architecture.
16. No unresolved architectural violations remain.

---

# 17. Milestone Outcome

At completion, Atlas will have a production-grade platform foundation capable of supporting independently owned business capabilities as bounded contexts.

The resulting architecture will provide:

```text
                    Atlas Platform
                         │
          ┌──────────────┴──────────────┐
          │                             │
     Developer Foundation          Runtime Foundation
          │                             │
        Core                    Application / Infrastructure
                                        │
                              ┌─────────┴─────────┐
                              │                   │
                       Bounded Contexts      Platform Services
                              │
              ┌───────────────┼───────────────┐
              │               │               │
           Identity       Organization   Future Contexts
              │               │               │
              └───────────────┼───────────────┘
                              │
                        Authorization
                              │
                         Persistence
                              │
                         Integration
```

This foundation is intended to support the later Atlas DAM capabilities without requiring the platform architecture to be repeatedly redesigned as the product grows.

---

# 18. Status

**Milestone 4 Design: PASS**

**Implementation Readiness: PASS**

**Current Implementation PR: M4-I1 — Runtime & Module Foundation**

Current implementation progress:

- I1.1 Repository Reconciliation — PASS
- I1.2 Runtime Composition Boundary — PASS
- I1.3 Module Boundary — change established
- I1.4 Module Layer Dependency Rules — PASS
- I1.5 Application Execution Boundary — PASS; no speculative abstraction introduced
- I1.6 Architecture Enforcement — PASS
- I1.7 Production/Runtime Tests — PASS
- I1.8 Documentation Update — in progress
- I1.9 Review & Quality Gates — pending

Milestone 4 remains **in implementation** until all implementation PRs and final validation are complete.
