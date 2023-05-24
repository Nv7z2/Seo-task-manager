import { userTypeDefs } from './modules/user.graphql';

export default `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
  
  ${userTypeDefs}
`;
