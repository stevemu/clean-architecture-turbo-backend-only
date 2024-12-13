import mongoose from 'mongoose';

export class DbImplBase {
  constructor(private mongoDbUri: string) {}

  async connect(): Promise<void> {
    await this.connectIfDisconnected();
  }

  async disconnect(): Promise<void> {
    await disconnectFromMongoDb();
  }

  async clearAllData(): Promise<void> {
    await clearAllData();
  }

  async connectIfDisconnected(): Promise<void> {
    const mongooseReadyState = mongoose.connection.readyState;
    // 0 = disconnected
    // 1 = connected
    // 2 = connecting
    // 3 = disconnecting

    if (mongooseReadyState === 0) {
      // 0 = disconnected
      await connectToMongoDb(this.mongoDbUri);
    }
  }
}

export const connectToMongoDb = async (mongoDbUri: string) => {
  await mongoose.connect(mongoDbUri);
};

export const disconnectFromMongoDb = async () => {
  await mongoose.disconnect();
};

export const clearAllData = async () => {
  await mongoose.connection.dropDatabase();
};
