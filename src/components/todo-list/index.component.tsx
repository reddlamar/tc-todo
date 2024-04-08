import {View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Text, MD2Colors, IconButton} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from './style.component';
import {moderateScale} from 'react-native-size-matters';
import TodoModal from '../todo-modal/index.component';
import TodoForm from '../todo-form/index.component';
import {useTodoStore} from '../../services/state-manager/zustand/store/todo.store';
import {Task} from '../../model/types.model';
import {TodoListProps} from '../../model/interfaces.model';

const TodoList = ({tasks}: TodoListProps) => {
  const [open, setOpen] = useState(false);
  const {updateTask, deleteTask} = useTodoStore();
  const [task, setTask] = useState<Task | null>(null);

  const renderItem = useCallback(
    ({item}: any) => (
      <View style={styles.itemContainer}>
        <View style={styles.itemLeftSide}>
          <Text
            style={[
              styles.sideItemText,
              item.completed ? styles.completedText : styles.inCompletedText,
            ]}>
            {item.completed ? 'Completed' : 'Incomplete'}
          </Text>
        </View>
        <View style={styles.itemTextContainer}>
          <View>
            <BouncyCheckbox
              size={moderateScale(30)}
              fillColor={MD2Colors.blue600}
              unFillColor={MD2Colors.white}
              iconStyle={styles.checkboxIcon}
              innerIconStyle={styles.checkboxInnerIcon}
              isChecked={item.completed}
              onPress={() => {
                updateTask({...item, ['completed']: !item.completed});
              }}
            />
          </View>
          <View style={styles.itemTextInnerContainer}>
            <View style={styles.taskDescription}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.iconButtonContainer}>
              <IconButton
                icon="square-edit-outline"
                iconColor={MD2Colors.blue600}
                onPress={() => {
                  setTask(item);
                  setOpen(true);
                }}
                style={styles.iconButton}
              />
              <IconButton
                icon="delete"
                iconColor={MD2Colors.red600}
                style={styles.iconButton}
                onPress={() => deleteTask(item.id)}
              />
            </View>
          </View>
        </View>
      </View>
    ),
    [deleteTask, updateTask],
  );

  return (
    <>
      <FlatList
        data={tasks}
        contentContainerStyle={styles.flatList}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
      />
      <TodoModal
        modalVisible={open}
        setModalVisible={setOpen}
        title="Add New Task">
        <TodoForm task={task} />
      </TodoModal>
    </>
  );
};

export default TodoList;
