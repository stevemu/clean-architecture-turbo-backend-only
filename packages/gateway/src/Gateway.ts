import { UserEntity } from '@repo/entities/UserEntity';

export interface Gateway {
  getUser(id: string): Promise<UserEntity>;
}
