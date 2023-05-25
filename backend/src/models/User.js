import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Number,
      required: true,
      enum: [1, 2, 3],
      default: 1,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default mongoose.model('User', userSchema);
