import { UserId } from './user-id';

export class AuthenticatedActor {
  private constructor(private readonly userId: UserId) {}

  public static fromUserId(userId: UserId): AuthenticatedActor {
    return new AuthenticatedActor(userId);
  }

  public get id(): UserId {
    return this.userId;
  }
}
