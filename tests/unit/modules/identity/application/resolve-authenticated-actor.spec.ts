import { describe, expect, it } from 'vitest';
import { AuthenticatedActor } from '../../../../../src/modules/identity/domain/authenticated-actor';
import { EmailAddress } from '../../../../../src/modules/identity/domain/email-address';
import { ResolveAuthenticatedActor } from '../../../../../src/modules/identity/application/resolve-authenticated-actor';
import { User } from '../../../../../src/modules/identity/domain/user';
import { UserRepository } from '../../../../../src/modules/identity/domain/user-repository';
import { UserId } from '../../../../../src/modules/identity/domain/user-id';

describe('ResolveAuthenticatedActor', () => {
  const userId = UserId.create('user-123');
  const email = EmailAddress.create('[user@example.com](mailto:user@example.com)');
  const createdAt = new Date('2026-01-01T00:00:00.000Z');
  const updatedAt = new Date('2026-01-01T00:00:00.000Z');

  const createUser = (status: 'active' | 'disabled') =>
    User.create({
      id: userId,
      email,
      status,
      createdAt,
      updatedAt,
    });

  const createRepository = (user: User | null): UserRepository => ({
    findById: async () => user,
    findByEmail: async () => user,
    save: async () => undefined,
  });

  it('resolves an active user to an authenticated actor', async () => {
    const user = createUser('active');
    const repository = createRepository(user);
    const resolver = new ResolveAuthenticatedActor(repository);

    const actor = await resolver.execute(userId);

    expect(actor).toBeInstanceOf(AuthenticatedActor);
    expect(actor?.id).toBe(userId);
  });

  it('returns null when the user does not exist', async () => {
    const repository = createRepository(null);
    const resolver = new ResolveAuthenticatedActor(repository);

    const actor = await resolver.execute(userId);

    expect(actor).toBeNull();
  });

  it('returns null when the user is disabled', async () => {
    const user = createUser('disabled');
    const repository = createRepository(user);
    const resolver = new ResolveAuthenticatedActor(repository);

    const actor = await resolver.execute(userId);

    expect(actor).toBeNull();
  });
});
