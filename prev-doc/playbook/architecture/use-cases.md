# Use Case Standards

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Architecture Standards
**Last Updated:** July 16, 2026

---

# Purpose

This document defines the standards for implementing Use Cases within the Digital Asset Management Platform.

Use Cases represent the application's business operations. They coordinate domain behavior, enforce application policies, and provide the primary entry point into the Application layer.

Every business operation should be implemented as a dedicated Use Case.

---

# Role of a Use Case

A Use Case answers the question:

> "What business operation is being performed?"

Examples include:

- Create Organization
- Invite Member
- Upload Asset
- Archive Folder
- Generate Transformation

A Use Case is not a controller, repository, or domain entity.

It orchestrates collaboration between those components.

---

# Responsibilities

A Use Case is responsible for:

- Coordinating business operations.
- Loading required domain objects.
- Invoking domain behavior.
- Persisting changes through repository interfaces.
- Managing transactions.
- Publishing domain events.
- Returning application results.

A Use Case should not implement business rules that belong in the Domain.

---

# One Use Case, One Responsibility

Each Use Case represents a single business capability.

Examples:

```text id="uc-01"
CreateOrganizationUseCase
InviteMemberUseCase
UploadAssetUseCase
```

Avoid combining unrelated operations into a single class.

Poor examples:

```text id="uc-02"
OrganizationService
AssetManager
UserOperations
```

---

# Standard Structure

Each Use Case should follow a consistent structure:

```text id="uc-03"
1. Validate application input.
2. Load required domain objects.
3. Verify business preconditions.
4. Execute domain behavior.
5. Persist changes.
6. Publish domain events.
7. Return a result.
```

Keeping this flow consistent makes Use Cases predictable and easy to review.

---

# Input

Use Cases accept a single request object (DTO or command).

Avoid long parameter lists.

Good:

```ts id="uc-04"
CreateOrganizationRequestDto;
```

Avoid:

```ts id="uc-05"
create(name, slug, ownerId, timezone);
```

---

# Output

Use Cases should return explicit result objects.

Do not return ORM entities or transport-specific models.

Returned values should represent the outcome of the business operation.

---

# Validation

Validation occurs at two levels.

**Transport validation** (e.g. required fields, formats) belongs in the Presentation layer.

**Business validation** (e.g. duplicate organization name, invalid state transitions) belongs in the Domain.

Use Cases coordinate these validations but should not duplicate them.

---

# Authorization

Authorization decisions belong in the Application layer.

A Use Case is responsible for ensuring that the caller has permission to perform the requested operation before invoking domain behavior.

Authorization logic should remain separate from business rules.

---

# Transactions

Transactions are managed by the Use Case.

A transaction should encompass the complete business operation.

Repositories should not start or commit transactions independently.

This ensures consistency across multiple persistence operations.

---

# Domain Events

When domain objects raise events, the Use Case is responsible for publishing them after successful persistence.

Event publication should occur only if the transaction commits successfully.

---

# Calling Other Use Cases

Use Cases should not invoke other Use Cases directly.

Instead, extract shared logic into:

- Domain Services
- Application Services
- Shared collaborators

This prevents hidden workflows and circular dependencies.

---

# External Services

Interactions with external systems (email, storage, queues, APIs) should occur through abstractions (ports).

The Use Case depends on the abstraction, not the implementation.

---

# Error Handling

Expected business failures should be represented by domain-specific errors or result types.

Unexpected infrastructure failures should propagate to centralized error handling.

Avoid catching exceptions simply to rethrow them.

---

# Logging

Use Cases should emit meaningful business-level logs.

Examples:

- Organization created.
- Member invited.
- Asset archived.

Avoid verbose implementation-level logging.

---

# Idempotency

Where appropriate, Use Cases should support idempotent execution.

Repeated requests with the same intent should not produce inconsistent results.

Examples include invitation acceptance and webhook processing.

---

# Performance

A Use Case should perform only the work required for its business operation.

Avoid unnecessary repository calls, eager loading, or repeated queries.

Optimize based on measurement rather than assumption.

---

# Testing

Every Use Case should have unit tests covering:

- Successful execution.
- Business rule violations.
- Authorization failures.
- Missing resources.
- Infrastructure failures (through mocked ports).

Tests should focus on observable business behavior.

---

# Anti-Patterns

Avoid:

- Business logic in controllers.
- Database queries in controllers.
- Calling repositories directly from presentation.
- Use Cases calling other Use Cases.
- Returning ORM entities.
- Framework-specific dependencies.

These patterns weaken the Application layer.

---

# Review Checklist

Before merging a Use Case, verify:

1. Does it represent exactly one business capability?
2. Are business rules delegated to the Domain?
3. Are transactions managed correctly?
4. Are repository interfaces used instead of implementations?
5. Are dependencies expressed through abstractions?
6. Is the result explicit and transport-independent?
7. Is the Use Case independently testable?

---

# Relationship to Other Documents

This standard builds on:

- Layered Architecture
- Module Design
- Dependency Rules
- Project Structure
- TypeScript Standards

Repository and Controller standards define the collaborators used by a Use Case.

---

# Summary

The Use Case is the application's unit of orchestration.

It coordinates the work required to complete a single business operation while preserving the separation of concerns between Presentation, Domain, and Infrastructure.

Well-designed Use Cases make the application predictable, testable, and easy to evolve.
