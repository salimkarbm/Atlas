import { EmailAddress } from './email-address';
import { User } from './user';
import { UserId } from './user-id';

export interface UserRepository {
  findById(id: UserId): Promise<User | null>;

  findByEmail(email: EmailAddress): Promise<User | null>;

  save(user: User): Promise<void>;
}
