import { createTaskStatus, getTaskStatuses } from '~controllers/task/taskStatus.controller';

export const taskStatusResolver = {
  Query: {
    getAllStatuses: async (_) => {
      return await getTaskStatuses();
    },
  },
  Mutation: {
    createTaskStatus: async (_, { input }) => {
      return await createTaskStatus(input);
    },
  },
};

export const taskStatusSchema = `#graphql
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
  data: TaskStatus
}

extend type Query {
  getAllStatuses: [TaskStatus!]!
}

extend type Mutation {
  createTaskStatus(input: TaskStatusInput!): TaskStatusResponse!
}
`;
