import {create} from 'zustand';
import {add, remove, update} from '../helpers/todo.helpers';
import {TodoState} from '../../../../model/interfaces.model';
import {Task} from '../../../../model/types.model';
import {
  addToTasks,
  deleteFromTaskCollection,
  getTaskCollection,
  updateTaskCollection,
} from '../../../firebase/firestore/todo.firestore';

export const useTodoStore = create<TodoState>()(set => ({
  tasks: [],
  isLoading: false,
  addTask: async (task: Task) => {
    set(() => ({
      isLoading: true,
    }));

    const id: string | null = await addToTasks(task);
    if (id) {
      task.id = id;
      set(state => ({
        tasks: add(state.tasks, task),
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
  updateTask: async (task: Task): Promise<void> => {
    set(() => ({
      isLoading: true,
    }));

    const isUpdated = await updateTaskCollection(task);
    if (isUpdated) {
      set(state => {
        const updatedTasks = update(state.tasks, task);
        return {tasks: updatedTasks};
      });
    }

    set(() => ({
      isLoading: false,
    }));
  },
  deleteTask: async (id: string) => {
    set(() => ({
      isLoading: true,
    }));

    const isDeleted = await deleteFromTaskCollection(id);
    if (isDeleted) {
      set(state => {
        // const filteredTasks = state.tasks.filter(t => t.id !== id);
        return {tasks: remove(state.tasks, id)};
      });
    }

    set(() => ({
      isLoading: false,
    }));
  },
}));
