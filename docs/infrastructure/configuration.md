# Application Configuration

## Purpose

The configuration module provides a single, strongly typed source of runtime configuration for the application.

## Responsibilities

- Load environment variables.
- Validate configuration.
- Expose immutable configuration.
- Prevent direct use of process.env.

## Public API

```ts
import { config } from '@/app/configuration';
```
