import {Task} from './types.model';

export interface TodoState {
  tasks: Task[];
  isLoading: boolean;
  addTask: (task: Task) => void;
  getTasks: (userId: string) => void;
  updateTask: (task: Task) => Promise<string>;
  deleteTask: (task: Task) => Promise<string>;
}

export interface TodoFormProps {
  task: Task | null;
}
