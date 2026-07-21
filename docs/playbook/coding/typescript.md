# TypeScript Standards

**Version:** 1.0.0
**Status:** Active
**Owner:** Engineering
**Category:** Coding Standards
**Last Updated:** July 16, 2026

---

# Purpose

This document defines how TypeScript is used throughout the Digital Asset Management Platform.

Our goal is to use TypeScript to improve correctness, maintainability, and developer experience—not merely to add type annotations.

The type system should prevent mistakes whenever practical.

---

# Guiding Principles

We use TypeScript to:

- Model the domain.
- Prevent invalid states.
- Catch errors at compile time.
- Improve readability.
- Reduce runtime surprises.

When choosing between runtime validation and compile-time guarantees, prefer compile-time where possible.

---

# Compiler Configuration

The project uses strict TypeScript settings.

At a minimum, the following compiler options must remain enabled:

- `"strict": true`
- `"noImplicitAny": true`
- `"strictNullChecks": true`
- `"noUncheckedIndexedAccess": true`
- `"exactOptionalPropertyTypes": true`
- `"noImplicitOverride": true`
- `"noFallthroughCasesInSwitch": true`

Relaxing compiler settings requires an ADR.

---

# Type Safety

Avoid weakening the type system.

The following should be treated as exceptional:

- `any`
- `unknown` without narrowing
- non-null assertions (`!`)
- unchecked type assertions (`as`)

Every unsafe operation should have a clear justification.

---

# Prefer Domain Types

Avoid passing primitive values when they represent business concepts.

Prefer:

```ts
type OrganizationId = string;
```

Better yet, introduce Value Objects or branded types where appropriate:

```ts
type OrganizationId = string & {
  readonly __brand: 'OrganizationId';
};
```

Business concepts deserve business types.

---

# Primitive Obsession

Avoid representing important domain concepts as plain primitives.

Poor:

```ts
function invite(email: string);
```

Better:

```ts
function invite(email: EmailAddress);
```

The domain should express intent.

---

# Interfaces vs Types

Use **interfaces** when defining contracts that are expected to be implemented or extended.

Examples:

- Repository contracts
- Service contracts
- Provider contracts

Use **type aliases** for:

- Unions
- Intersections
- Branded types
- Utility compositions
- Function signatures

Choose the construct that best communicates intent.

---

# Readonly by Default

Immutable data is easier to reason about.

Prefer:

```ts
readonly id: OrganizationId;
readonly createdAt: Date;
```

Collections should be exposed as:

```ts
readonly Asset[]
```

Mutation should be intentional.

---

# Optional Properties

Optional properties represent genuinely optional data.

Do not use optional properties to avoid initialization.

Prefer explicit defaults whenever practical.

---

# Null vs Undefined

Use `undefined` to represent absence.

Avoid introducing `null` unless required by:

- external APIs
- database semantics
- third-party libraries

The project should maintain one primary representation for missing values.

---

# Union Types

Prefer discriminated unions over boolean flags.

Poor:

```ts
isSuccess: boolean;
```

Better:

```ts
type Result = { status: 'success'; value: Asset } | { status: 'failure'; error: DomainError };
```

The compiler can then enforce exhaustive handling.

---

# Exhaustiveness

All discriminated unions should be handled exhaustively.

Switch statements should never silently ignore new variants.

Compiler errors are preferable to runtime surprises.

---

# Enums

Prefer string literal unions over TypeScript `enum`.

Preferred:

```ts
type AssetStatus = 'pending' | 'processing' | 'ready';
```

Use `enum` only when interoperability or runtime behavior requires it.

---

# Functions

Functions should:

- perform one responsibility;
- return explicit types;
- avoid hidden side effects; and
- use descriptive parameter names.

Prefer small, composable functions over large procedural blocks.

---

# Async Code

Use `async` / `await`.

Avoid chaining `.then()` in application code.

Always await asynchronous work unless fire-and-forget behavior is intentional and documented.

Unhandled promises are prohibited.

---

# Error Handling

Throw domain-specific errors when business rules are violated.

Avoid throwing generic `Error`.

Expected failures should be modeled explicitly.

Unexpected failures should be handled centrally.

---

# Collections

Prefer immutable array operations.

Good:

- `map`
- `filter`
- `reduce`

Avoid unnecessary mutation.

---

# Type Assertions

Type assertions should be rare.

Before using `as`, ask:

1. Can the type be inferred?
2. Can the value be narrowed?
3. Can the API be redesigned?

Assertions should not hide design problems.

---

# Generic Types

Use generics to improve type safety—not to make APIs more abstract.

Poor:

```ts
Repository<T, U, V>;
```

Better:

```ts
AssetRepository;
```

Introduce generics only when multiple concrete implementations justify them.

---

# Utility Types

Use built-in utility types where appropriate.

Examples:

- `Partial`
- `Required`
- `Readonly`
- `Pick`
- `Omit`

Avoid excessive nesting that reduces readability.

---

# Barrel Exports

Barrel exports are permitted only for public module APIs.

Avoid deeply nested barrel files that obscure dependencies.

Internal implementation files should be imported directly.

---

# Import Style

Prefer named imports.

Avoid wildcard imports unless the module intentionally exposes a namespace.

Imports should remain explicit.

---

# Comments

Code should explain itself.

Comments should explain **why**, not **what**.

Poor:

```ts
// Increment counter
counter++;
```

Better:

```ts
// Retry count is incremented to enforce exponential backoff.
```

---

# Testing

Types should support testing.

Avoid APIs that require excessive mocking.

Favor dependency injection and explicit contracts.

---

# Performance

Avoid premature optimization.

Prefer readable code until measurement demonstrates a performance issue.

Optimization should not compromise type safety.

---

# Anti-Patterns

Avoid:

- `any`
- Excessive type assertions
- Deeply nested generics
- Primitive obsession
- Boolean parameter lists
- Massive interfaces
- "God" types
- Implicit `undefined` behavior

These reduce clarity and increase maintenance cost.

---

# Review Checklist

Before merging TypeScript code, ask:

1. Does the type system prevent invalid states?
2. Are business concepts represented as domain types?
3. Are unsafe operations justified?
4. Is immutability preferred?
5. Are unions exhaustive?
6. Could the compiler catch more mistakes?

If the answer to any of these is "no", reconsider the design.

---

# Summary

TypeScript is more than a language feature—it is an architectural tool.

We use it to model the business domain, encode invariants, and shift errors from runtime to compile time wherever practical.

Strong types improve confidence, simplify maintenance, and make the platform more resilient as it grows.
