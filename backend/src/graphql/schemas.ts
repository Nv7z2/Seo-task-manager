import { authSchema } from './modules/auth/auth.graphql';
import { taskPrioritySchema } from './modules/task/taskPriority.graphql';
import { taskStatusSchema } from './modules/task/taskStatus.graphql';

export default `#graphql
  type Query {}

  type Mutation {}

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
