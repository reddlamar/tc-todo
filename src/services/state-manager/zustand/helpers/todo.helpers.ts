import {Task} from '../../../../model/types.model';

export const add = (tasks: Task[], task: Task) => [...tasks, task];

export const remove = (tasks: Task[], id: string) =>
  tasks.filter(t => t.id !== id);

export const update = (tasks: Task[], task: Task) => {
  return tasks.map((t: any) => {
    if (t.id === task.id) {
      return {...task};
    }
    return t;
  });
};
