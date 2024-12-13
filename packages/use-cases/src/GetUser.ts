import { Gateway } from '@repo/gateway/Gateway';

export type GetUserRequest = {
  id: string;
};

export type UserDto = {
  name: string;
};

export type GetUserResponse = {
  user: UserDto;
};

export class GetUser {
  public gateway!: Gateway;

  async execute(request: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.gateway.getUser(request.id);
    return {
      user: {
        name: user.name || 'N/A',
      },
    };
  }
}
