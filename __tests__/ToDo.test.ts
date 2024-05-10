import {
  add,
  remove,
  update,
} from '../src/services/state-manager/zustand/helpers/todo.helpers';
import {Task} from '../src/model/types.model';

test('add task function', () => {
  const tasks: Task[] = [
    {id: '1', userId: 11, title: 'task', completed: false},
  ];
  const task: Task = {
    id: '2',
    userId: 11,
    title: 'task1',
    completed: false,
  };

  const expectedTasks = add(tasks, task);

  const actualTasks = [
    {id: '1', userId: 11, title: 'task', completed: false},
    {
      id: '2',
      userId: 11,
      title: 'task1',
      completed: false,
    },
  ];

  expect(expectedTasks).toEqual(actualTasks);
});

test('remove task function', () => {
  const tasks: Task[] = [
    {id: '1', userId: 11, title: 'task', completed: false},
  ];
  const expectedTasks: Task[] = remove(tasks, '1');
  const actualTasks: Task[] = [];
  expect(expectedTasks.length).toEqual(0);
  expect(expectedTasks).toEqual(actualTasks);
});

test('update task function', () => {
  const task: Task = {
    id: '2',
    userId: 11,
    title: 'task1',
    completed: false,
  };
  const tasks: Task[] = [task];
  task.title = 'update task1';
  const expectedTasks: Task[] = update(tasks, task);
  const actualTasks: Task[] = [task];
  expect(expectedTasks[0].title).toEqual(actualTasks[0].title);
});
