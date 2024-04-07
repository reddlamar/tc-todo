export const update = (state: any, task: any) => {
  return state.todos.map((t: any) => {
    if (t.id === task.id) {
      return {...task};
    }
    return t;
  });
};
