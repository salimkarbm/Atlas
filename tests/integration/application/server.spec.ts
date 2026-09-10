import { afterEach, describe, expect, it } from 'vitest';
import { createServer } from '../../../src/application/server';

describe('Application server', () => {
  let server: ReturnType<ReturnType<typeof createServer>['listen']>;

  afterEach(async () => {
    if (!server) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  it('serves the health endpoint through the composed application', async () => {
    const app = createServer();

    server = app.listen(0);

    await new Promise<void>((resolve, reject) => {
      server.once('listening', () => resolve());
      server.once('error', reject);
    });

    const address = server.address();

    if (!address || typeof address === 'string') {
      throw new Error('Expected the test server to expose a TCP address');
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/health`);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      status: 'ok',
    });
  });
});
