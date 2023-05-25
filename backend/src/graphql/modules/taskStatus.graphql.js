import TaskStatusModel from '~models/TaskStatus.model';
import { taskStatusConsts } from '~const/task/taskStatus.const';

export const taskStatusResolver = {
  Query: {
    getTaskStatuses: async (_) => {
      try {
        const taskStatuses = await TaskStatusModel.find();

        return taskStatuses;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createTaskStatus: async (_, { input }) => {
      try {
        if (!taskStatusConsts.includes(input.type)) {
          return { message: 'Invalid task status type' };
        }

        const taskStatus = new TaskStatusModel({ ...input });
        await taskStatus.save();

        return { taskStatus, message: 'Task status created successfully' };
      } catch (error) {
        return { message: error.message };
      }
    },
  },
};

export const taskStatusTypeDefs = `#graphql
type TaskStatus {
  _id: ID!
  name: String!
  type: String!
  color: String
  createdAt: String
  updatedAt: String
}

input TaskStatusInput {
  name: String!
  type: String!
  color: String
}

type TaskStatusResponse {
  taskStatus: TaskStatus
  message: String!
}

extend type Query {
  getTaskStatuses: [TaskStatus!]!
}

extend type Mutation {
  createTaskStatus(input: TaskStatusInput!): TaskStatusResponse!
}
`;
