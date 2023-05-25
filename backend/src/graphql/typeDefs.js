import { authTypeDefs } from './modules/auth.graphql';

export default `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
  
  ${authTypeDefs}
`;
