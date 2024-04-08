import {Task} from './types.model';

export interface TodoState {
  tasks: Task[];
  isLoading: boolean;
  addTask: (task: Task) => void;
  getTasks: (userId: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export interface TodoFormProps {
  task: Task | null;
}

export interface TodoListProps {
  tasks: Task[];
}
