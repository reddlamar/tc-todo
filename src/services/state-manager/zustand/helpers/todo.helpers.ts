import {Task} from '../../../../model/types.model';

export const update = (state: any, task: Task) => {
  return state.tasks.map((t: any) => {
    if (t.id === task.id) {
      return {...task};
    }
    return t;
  });
};
