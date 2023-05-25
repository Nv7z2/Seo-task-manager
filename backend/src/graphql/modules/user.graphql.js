import { createUser, login } from '~controllers/authController.js';

export const userResolvers = {
  Query: {
    login: async (_, { email, password }) => {
      return await login({ email, password });
    }
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      return await createUser({ email, password });
    },
  },
};

export const userTypeDefs = `
type User {
  id: String!
  email: String!
  password: String!
  roles: Int
  createdAt: String!
  updatedAt: String!
}

type UserResponse {
  data: User
  status: String!
  message: String!
}

extend type Query {
  login(email: String!, password: String!): UserResponse
}

extend type Mutation {
  createUser(email: String!, password: String!): UserResponse
}
`;
