import User from '~models/User.js';

export const userResolvers = {
  Query: {
    getUser: async (_, { email }) => {
      try {
        return await User.findOne({ email });
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      try {
        const user = new User({ email, password });
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    }
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

extend type Query {
  getUser(email: String!): User
}

extend type Mutation {
  createUser(email: String!, password: String!): User
}
`;
