import {create} from 'zustand';
import {update} from '../helpers/todo.helpers';
import {TodoState} from '../../../../model/interfaces.model';
import {Task} from '../../../../model/types.model';
import {
  addToTasks,
  deleteFromTaskCollection,
  getTaskCollection,
  updateTaskCollection,
} from '../../../firestore/todo.firestore';

export const useTodoStore = create<TodoState>()(set => ({
  tasks: [],
  isLoading: false,
  addTask: async (task: Task) => {
    set(() => ({
      isLoading: true,
    }));

    const isSuccess: boolean = await addToTasks(task);
    if (isSuccess) {
      set(state => ({
        tasks: [...state.tasks, task],
      }));
    }

    set(() => ({
      isLoading: false,
    }));
  },
  getTasks: async (userId: string) => {
    set(() => ({
      isLoading: true,
    }));

    const tasks: Task[] | undefined = await getTaskCollection(userId);
    if (tasks) {
      set(() => {
        return {tasks: tasks};
      });
    }

    set(() => ({
      isLoading: false,
    }));
  },
  updateTask: async (task: Task): Promise<string> => {
    set(() => ({
      isLoading: true,
    }));

    const isUpdated = await updateTaskCollection(task);
    if (isUpdated) {
      set(state => {
        const updatedTasks = update(state, task);
        return {tasks: updatedTasks};
      });
      return '';
    }

    set(() => ({
      isLoading: false,
    }));
    return 'I cannot update your tasks.';
  },
  deleteTask: async (task: Task) => {
    set(() => ({
      isLoading: true,
    }));

    const isDeleted = await deleteFromTaskCollection(task.id);
    if (isDeleted) {
      set(state => {
        const filteredTasks = state.tasks.filter(t => t.id !== task.id);
        return {tasks: filteredTasks};
      });
      return '';
    }

    set(() => ({
      isLoading: false,
    }));
    return `I cannot delete this task, ${task.title}`;
  },
}));
