import { UserEntity } from '@repo/entities/UserEntity';
import { UserPojo } from './UserModel';

export const convertUserPojoToUserEntity = (pojo: UserPojo): UserEntity => {
  const person = new UserEntity();
  person.id = pojo._id.toString();
  person.name = pojo.name;
  return person;
};
