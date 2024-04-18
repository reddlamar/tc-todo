import {View, Alert} from 'react-native';
import React, {useRef} from 'react';
import {MD2Colors, Text, TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import TodoButton from '../todo-button/index.component';
import {styles} from './style.component';
import {useUserStore} from '../../services/state-manager/zustand/store/user.store';
import {TodoFormProps} from '../../model/interfaces.model';

const TodoFormSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

const TodoForm = ({task}: TodoFormProps) => {
  const buttonText: string = task ? 'Update Task' : 'Add Task';
  const todoButtonRef = useRef<any>(null);
  const {user} = useUserStore();

  const form = useFormik({
    initialValues: {
      title: task?.title ? task.title : '',
    },
    validationSchema: TodoFormSchema,
    onSubmit: values => console.log(values),
  });

  const handleOnPress = () => {
    if (task) {
      console.log('Task', task);
      todoButtonRef?.current?.updateTodoList();
      Alert.alert('The task was successfully updated!');
    } else {
      todoButtonRef?.current?.addToTodoList();
      clearFields();
    }
  };

  const createTask = () => {
    if (task && user) {
      return {
        id: task.id,
        userId: user.uid,
        title: form.values.title,
        completed: task.completed,
      };
    }

    if (user) {
      return {
        userId: user.uid,
        title: form.values.title,
        completed: false,
      };
    }
  };

  const clearFields = () => {
    form.values.title = '';
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={form.values.title}
          placeholder="Title"
          mode="outlined"
          onChangeText={form.handleChange('title')}
          autoCapitalize="none"
          style={styles.textInput}
          testID="title"
        />
        {form.touched && form.errors.title && (
          <Text style={styles.text}>{form?.errors?.title}</Text>
        )}
      </View>
      <View style={styles.addButtonContainer}>
        <TodoButton
          onPress={handleOnPress}
          ref={todoButtonRef}
          createTask={createTask}
          buttonText={buttonText}
          buttonColor={MD2Colors.white}
          textColor={MD2Colors.blue600}
        />
      </View>
    </View>
  );
};

export default TodoForm;
