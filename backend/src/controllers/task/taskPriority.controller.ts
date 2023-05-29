import TaskPriority from '~models/task/taskPriority.model';
import { handleResponse } from '~utils/handleResponse';

export const getTaskPriorities = async () => {
  try {
    const taskPriorities = await TaskPriority.find();

    return handleResponse({ data: taskPriorities, code: 'task_priorities_retrieved' });
  } catch (error) {
    return handleResponse({ code: 'server_error' });
  }
};

export const createTaskPriority = async (input) => {
  try {
    if (TaskPriority.findOne({ name: input.name })) {
      return handleResponse({ code: 'task_priority_already_exists' });
    }

    const taskPriority = new TaskPriority({ ...input });
    await taskPriority.save();

    return handleResponse({ data: taskPriority, code: 'task_priority_created' });
  } catch (error) {
    return handleResponse({ code: 'server_error' });
  }
};
