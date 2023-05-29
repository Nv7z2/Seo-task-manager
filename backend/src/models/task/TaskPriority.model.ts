import { Schema, model } from 'mongoose';

const taskPrioritySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      required: false,
      default: '#000000',
    },
  },
  {
    timestamps: true,
    collection: 'task_priorities',
  },
);

export default model('TaskPriority', taskPrioritySchema);
