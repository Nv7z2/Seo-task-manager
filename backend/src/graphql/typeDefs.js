import { authTypeDefs } from './modules/auth.graphql';
import { taskStatusTypeDefs } from './modules/taskStatus.graphql';

export default `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
  
  ${authTypeDefs}

  ${taskStatusTypeDefs}
`;
