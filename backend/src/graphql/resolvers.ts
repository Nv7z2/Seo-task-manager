import { authResolvers } from './modules/auth/auth.graphql';
import { taskStatusResolver } from './modules/task/taskStatus.graphql';
import { taskPriorityResolver } from './modules/task/taskPriority.graphql';

export default {
  ...authResolvers,
  ...taskStatusResolver,
  ...taskPriorityResolver,
};
