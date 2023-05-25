import TaskPriority from '~models/task/TaskPriority.model';

export const taskPriorityResolver = {
  Query: {
    getTaskPriorities: async (_) => {
      try {
        const taskPriorities = await TaskPriority.find();

        return taskPriorities;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createTaskPriotity: async (_, { input }) => {
      try {
        const taskPriority = new TaskPriority({ ...input });
        await taskPriority.save();

        return { taskPriority, message: 'Task priority created successfully' };
      } catch (error) {
        return { message: error.message };
      }
    },
  },
};

export const taskPriorityTypeDefs = `#graphql
type TaskPriority {
  _id: ID!
  name: String!
  index: Int!
  color: String
  createdAt: String
  updatedAt: String
}

input TaskPriorityInput {
  name: String!
  index: Int!
  color: String
}

type TaskPriorityResponse {
  taskPriority: TaskPriority
  message: String!
}

extend type Query {
  getTaskPriorities: [TaskPriority!]!
}

extend type Mutation {
  createTaskPriotity(input: TaskPriorityInput!): TaskPriorityResponse!
}
`;
