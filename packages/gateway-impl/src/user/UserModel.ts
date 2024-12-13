import mongoose, { Model } from 'mongoose';

const { Schema } = mongoose;

export const USER_COLLECTION_NAME = 'user';

export interface UserDocumentInterface {
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserPojo = UserDocumentInterface & {
  _id: mongoose.Types.ObjectId;
};

const personSchema = new Schema<UserDocumentInterface>(
  {
    name: String,
  },
  {
    timestamps: true,
    collection: USER_COLLECTION_NAME,
    minimize: false,
  },
);

export const UserModel: Model<UserDocumentInterface> =
  mongoose.models.person || mongoose.model<UserDocumentInterface>('user', personSchema);
