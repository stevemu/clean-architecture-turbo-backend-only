import { DbImplBase } from './GatewayImplBase';
import { Gateway } from '@repo/gateway/Gateway';
import { UserEntity } from '@repo/entities/UserEntity';
import { getUser } from './user/getUser';

export class GatewayImpl extends DbImplBase implements Gateway {
  constructor(mongoDbUri: string) {
    super(mongoDbUri);
  }

  getUser(id: string): Promise<UserEntity> {
    return getUser(id);
  }
}
