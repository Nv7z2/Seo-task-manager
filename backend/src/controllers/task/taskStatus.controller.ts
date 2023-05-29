import { taskStatusConsts } from '~const/task/taskStatus.const';
import TaskStatusModel from '~models/task/taskStatus.model';
import { handleResponse } from '~utils/handleResponse';

export async function getTaskStatuses() {
  try {
    const taskStatuses = await TaskStatusModel.find();

    if (!taskStatuses) return { code: 'task_statuses_not_found' };

    return handleResponse({ data: taskStatuses, code: 'task_statuses_retrieved' });
  } catch (error) {
    return handleResponse({ code: 'server_error' });
  }
}

export async function createTaskStatus(input) {
  try {
    if (!taskStatusConsts.includes(input.type)) {
      return handleResponse({ code: 'invalid_status_type' });
    }

    if (TaskStatusModel.findOne({ name: input.name })) {
      return handleResponse({ code: 'task_status_already_exists' });
    }

    const taskStatus = new TaskStatusModel({ ...input });
    await taskStatus.save();

    return handleResponse({ data: taskStatus, code: 'task_status_created' });
  } catch (error) {
    return handleResponse({ code: 'server_error' });
  }
}
