import { createUser, login } from '~controllers/auth.controller';

export const authResolvers = {
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

export const authSchema = `#graphql
type User {
  _id: ID!
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
