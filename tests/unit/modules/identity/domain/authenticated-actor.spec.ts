import { describe, expect, it } from 'vitest';
import { AuthenticatedActor } from '../../../../../src/modules/identity/domain/authenticated-actor';
import { UserId } from '../../../../../src/modules/identity/domain/user-id';

describe('AuthenticatedActor', () => {
  it('creates an authenticated actor from a user id', () => {
    const userId = UserId.create('user-123');

    const actor = AuthenticatedActor.fromUserId(userId);

    expect(actor.id.toString()).toBe('user-123');
  });

  it('preserves the user id identity', () => {
    const userId = UserId.create('user-123');

    const actor = AuthenticatedActor.fromUserId(userId);

    expect(actor.id).toBe(userId);
  });
});
