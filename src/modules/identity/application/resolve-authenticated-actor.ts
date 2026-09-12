import { AuthenticatedActor } from '../domain/authenticated-actor';
import { UserRepository } from '../domain/user-repository';
import { UserId } from '../domain/user-id';

export class ResolveAuthenticatedActor {
  public constructor(private readonly users: UserRepository) {}

  public async execute(userId: UserId): Promise<AuthenticatedActor | null> {
    const user = await this.users.findById(userId);

    if (!user || user.isDisabled()) {
      return null;
    }

    return AuthenticatedActor.fromUserId(user.id);
  }
}
