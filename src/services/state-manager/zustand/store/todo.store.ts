import {create} from 'zustand';
import {update} from '../helpers/todo.helpers';
import {TodoState} from '../../../../model/interfaces.model';
import {Task} from '../../../../model/types.model';
import {addToTasks, getTaskCollection} from '../../../firestore/todo.firestore';

export const useTodoStore = create<TodoState>()(set => ({
  tasks: [],
  addTask: async (task: Task) => {
    const isSuccess: boolean = await addToTasks(task);
    if (isSuccess) {
      set(state => ({
        tasks: [...state.tasks, task],
      }));
    }
  },
  getTasks: async (userId: string) => {
    const tasks: any = await getTaskCollection(userId);
    if (tasks) {
      set(() => {
        return {tasks: tasks};
      });
    }
  },
  updateTask: (task: Task) =>
    set(state => {
      const updatedTodos = update(state, task);
      return {tasks: updatedTodos};
    }),
  deleteTask: (task: Task) =>
    set(state => {
      const filteredTodos = state.tasks.filter(t => t.id !== task.id);
      return {tasks: filteredTodos};
    }),
}));
