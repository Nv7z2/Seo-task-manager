import { createTaskPriority, getTaskPriorities } from '~controllers/task/taskPriority.controller';

export const taskPriorityResolver = {
  Query: {
    taskPriorities: async (_) => {
      return await getTaskPriorities();
    },
  },
  Mutation: {
    createTaskPriotity: async (_, { input }) => {
      return await createTaskPriority(input);
    },
  },
};

export const taskPrioritySchema = `#graphql
type TaskPriority {
  _id: ID!
  name: String!
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
  data: TaskPriority
  code: String
}

type TaskPriorityArrayResponse {
  dataArray: [TaskPriority]
  code: String
}

extend type Query {
  taskPriorities: TaskPriorityArrayResponse!
}

extend type Mutation {
  createTaskPriotity(input: TaskPriorityInput!): TaskPriorityResponse!
}
`;
