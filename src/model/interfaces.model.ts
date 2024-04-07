import {Task} from './types.model';

export interface TodoState {
  tasks: Task[];
  addTask: (task: Task) => void;
  getTasks: (userId: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export interface TodoFormProps {
  task: Task | null;
}
