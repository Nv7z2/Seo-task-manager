import { Schema, model } from 'mongoose';
import { taskStatusConsts } from '~const/task/taskStatus.const';

const taskStatusSchema = new Schema(
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

export default model('TaskStatus', taskStatusSchema);
