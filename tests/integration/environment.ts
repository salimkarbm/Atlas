import { createTestEnvironment, type TestEnvironment } from '../shared/setup/test-environment';

/**
 * Atlas Testing Foundation
 *
 * Integration Test Environment
 *
 * The integration test environment extends the shared
 * Atlas testing environment with capabilities required
 * for integration testing.
 *
 * Extend this environment only when reusable integration
 * testing infrastructure is introduced.
 */
export interface IntegrationTestEnvironment extends TestEnvironment {}

/**
 * Creates a new integration test environment.
 *
 * Each invocation returns an isolated integration testing
 * environment built upon the shared Atlas testing environment.
 */
export function createIntegrationTestEnvironment(): IntegrationTestEnvironment {
  return {
    ...createTestEnvironment(),
  };
}
