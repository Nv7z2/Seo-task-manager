import mongoose from 'mongoose';
import { taskStatusConsts } from '~const/task/taskStatus.const';

const taskStatusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: taskStatusConsts,
      default: 'todo',
    },
    color: {
      type: String,
      default: '#000000',
    }
  },
  {
    timestamps: true,
    collection: 'task_statuses',
  },
);

export default mongoose.model('TaskStatus', taskStatusSchema);
