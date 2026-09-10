# Modules

`src/modules/` contains Atlas business capabilities organized as bounded contexts.

Each bounded context owns its complete business capability and is structured as:

```text
<bounded-context>/
├── domain/
├── application/
├── infrastructure/
└── interfaces/
```

## Ownership

A bounded context owns:

- its domain model and business rules
- its application use cases and orchestration
- its infrastructure implementations
- its external interfaces/adapters

A business concept has one canonical bounded-context owner.

## Dependency direction

Within a bounded context:

```text
interfaces → application → domain
infrastructure → application/domain contracts
```

The domain layer must remain independent of application, infrastructure, framework, and transport concerns.

Cross-context collaboration must use explicitly defined contracts or integration mechanisms. Modules must not depend on another bounded context's internal implementation.

## Relationship to platform layers

`src/core/` provides shared Developer Foundation capabilities and must not depend on modules.

Platform-level `src/application/` provides runtime composition and application bootstrap responsibilities.

Platform-level `src/infrastructure/` provides shared/platform infrastructure. Business-context-specific infrastructure belongs inside its owning module.

No bounded context is created by this directory alone. Concrete contexts are introduced only when their business capability is being implemented.
