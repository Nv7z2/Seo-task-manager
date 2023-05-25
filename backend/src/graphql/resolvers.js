import { authResolvers } from './modules/auth.graphql';
import { taskStatusResolver } from './modules/taskStatus.graphql';

export default {
  ...authResolvers,
  ...taskStatusResolver,
};
