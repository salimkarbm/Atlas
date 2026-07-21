# ADR-002: Separate Domain from TypeORM

Date: 2026-07-21
Status: Accepted

## Context

We were tempted to use TypeORM entities as domain models to save code.

## Decision

We will keep domain entities separate from persistence models with a Mapper layer.

## Alternatives Considered

1. Use TypeORM entities as domain (rejected - leaks infra to domain)
2. Use Prisma (rejected - still couples domain to DB)

## Consequences

- Domain is pure, testable, replaceable

* More boilerplate code (mapper for each entity)

## Reference

Epic: Epic 2 Code Quality
