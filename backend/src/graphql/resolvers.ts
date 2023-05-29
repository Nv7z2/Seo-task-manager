import { authResolvers } from './modules/auth/auth.graphql';
import { taskPriorityResolver } from './modules/task/taskPriority.graphql';
import { taskStatusResolver } from './modules/task/taskStatus.graphql';

export default {
  ...authResolvers,
  ...taskStatusResolver,
  ...taskPriorityResolver,
};
