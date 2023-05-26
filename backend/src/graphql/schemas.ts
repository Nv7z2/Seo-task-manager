import { authSchema } from './modules/auth/auth.graphql';
import { taskPrioritySchema } from './modules/task/taskPriority.graphql';
import { taskStatusSchema } from './modules/task/taskStatus.graphql';

export default `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type ResponseSuccess {
    code: String!
  }

  type ResponseError {
    code: String!
    message: String
  }

  ${authSchema}

  ${taskStatusSchema}

  ${taskPrioritySchema}
`;
