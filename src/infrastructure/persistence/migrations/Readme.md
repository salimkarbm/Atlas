# Database Migrations

This directory contains all TypeORM migrations.

## Rules

- Migrations are immutable once committed.
- Every migration must implement both `up()` and `down()`.
- Schema changes are made only through migrations.
- Do not edit an executed migration.
- Create a new migration for every schema change.

## Workflow

Generate:

```bash
npm run migration:generate -- src/infrastructure/migrations/<migration-name>
```

Run:

```bash
npm run migration:run
```

Revert:

```bash
npm run migration:revert
```
