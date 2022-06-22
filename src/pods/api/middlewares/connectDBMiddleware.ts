import mongoose from 'mongoose';
import { NextApiHandler } from 'next';

const connectDBMiddleware =
  (handler: NextApiHandler): NextApiHandler =>
  async (...props) => {
    if (mongoose.connections[0].readyState) {
      return handler(...props);
    }

    await mongoose.connect(process.env.MONGO_DB_URL);
    return handler(...props);
  };

export default connectDBMiddleware;
