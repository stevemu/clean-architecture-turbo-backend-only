import { convertUserPojoToUserEntity } from './convertUtil';
import { UserModel } from './UserModel';

export const getUser = async (id: string) => {
  const pojo = await UserModel.findById(id).lean();
  const userEntity = convertUserPojoToUserEntity(pojo);
  return userEntity;
};
