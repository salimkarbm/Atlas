import { createTestEnvironment, type TestEnvironment } from '../shared/setup/test-environment';

/**
 * Atlas Testing Foundation
 *
 * End-to-End Test Environment
 *
 * The end-to-end test environment extends the shared
 * Atlas testing environment with capabilities required
 * for end-to-end testing.
 *
 * Extend this environment only when reusable end-to-end
 * testing infrastructure is introduced.
 */
export interface EndToEndTestEnvironment extends TestEnvironment {}

/**
 * Creates a new end-to-end test environment.
 *
 * Each invocation returns an isolated end-to-end testing
 * environment built upon the shared Atlas testing environment.
 */
export function createEndToEndTestEnvironment(): EndToEndTestEnvironment {
  return {
    ...createTestEnvironment(),
  };
}
