import { authTypeDefs } from './modules/auth/auth.graphql';
import { taskStatusTypeDefs } from './modules/task/taskStatus.graphql';
import { taskPriorityTypeDefs } from './modules/task/taskPriority.graphql';

export default `
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
  
  ${authTypeDefs}

  ${taskStatusTypeDefs}

  ${taskPriorityTypeDefs}
`;
