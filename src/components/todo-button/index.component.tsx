import React, {forwardRef, useImperativeHandle} from 'react';
import {Button} from 'react-native-paper';
import {styles} from './style.component';
import {useTodoStore} from '../../services/state-manager/zustand/store/todo.store';
import {Alert} from 'react-native';

const TodoButton = forwardRef((props: any, ref: any) => {
  const {addTask, updateTask} = useTodoStore();
  const {onPress, createTask, buttonText} = props;

  useImperativeHandle(
    ref,
    () => {
      return {
        addToTodoList() {
          const task = createTask();
          if (task) {
            addTask(task);
          }
        },
        async updateTodoList() {
          const task = createTask();
          let error = '';
          if (task) {
            error = await updateTask(task);
          }
          if (error) {
            Alert.alert('Update Error', error);
          }
        },
      };
    },
    [createTask, addTask, updateTask],
  );

  return (
    <Button
      {...props}
      style={styles.addNewButton}
      labelStyle={styles.label}
      onPress={() => onPress()}>
      {buttonText}
    </Button>
  );
});

export default TodoButton;
