import { taskStatusConsts } from '~const/task/taskStatus.const';
import TaskStatusModel from '~models/task/taskStatus.model';

export async function getTaskStatuses() {
  try {
    const taskStatuses = await TaskStatusModel.find();

    return taskStatuses;
  } catch (error) {
    return { code: 'server_error', message: error.message };
  }
}

export async function createTaskStatus(input) {
  try {
    if (!taskStatusConsts.includes(input.type)) {
      return { code: 'invalid_status_type' };
    }

    const taskStatus = new TaskStatusModel({ ...input });
    await taskStatus.save();

    return { data: taskStatus, code: 'task_created' };
  } catch (error) {
    return { code: 'server error', message: error.message };
  }
}
