import {View, Text} from 'react-native';
import React from 'react';
import {MD2Colors} from 'react-native-paper';
import {styles} from './style.screen';

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TodoScreen = () => {
  //   const [open, setOpen] = useState(false);
  //   const {tasks, getTasks} = useTodoStore();
  //   const {user} = useUserStore();

  //   useEffect(() => {
  //     if (user) {
  //       getTasks(user.uid);
  //     }
  //   }, [user, getTasks]);

  //   const handleOnPress = () => {
  //     setOpen(true);
  //   };

  const renderContent = () => {
    // if (tasks.length) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.topInnerContainer}>
            <View style={{backgroundColor: MD2Colors.blue600}}>
              <Text style={styles.todayText}>Today</Text>
              {/* <Text style={styles.taskCount}>
                {tasks.length > 1
                  ? `${tasks.length} Tasks`
                  : `${tasks.length} Task`}
              </Text> */}
            </View>
            <View style={styles.buttonContainer}>
              {/* <TodoButton
                  onPress={handleOnPress}
                  textColor={MD2Colors.blue600}
                  buttonColor={MD2Colors.white}
                  buttonText="Add Task"
                /> */}
            </View>
          </View>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.dateTimeContainer}>
              <View style={styles.dateTextContainer}>
                <Text style={styles.dateOfMonth}>{new Date().getDate()}</Text>
                <Text style={styles.dayOfWeek}>
                  {dayOfWeek[new Date().getDay()]}
                </Text>
              </View>
              <View>
                <Text style={styles.hoursPerDay}>Tasks for today</Text>
              </View>
            </View>
            {/* <TodoList tasks={tasks} /> */}
          </View>
        </View>
      </>
    );
    // }

    // return (
    //   <View style={styles.emptyView}>
    //     <Text style={styles.emptyText}>You have nothing to do!</Text>
    //     {/* <TodoButton
    //       onPress={handleOnPress}
    //       textColor={MD2Colors.white}
    //       buttonColor={MD2Colors.blue600}
    //       buttonText="Add a task"
    //     /> */}
    //   </View>
    // );
  };

  return (
    <>
      {renderContent()}
      {/* <TodoModal
        modalVisible={open}
        setModalVisible={setOpen}
        title="Add New Task">
        <TodoForm task={null} />
      </TodoModal> */}
    </>
  );
};

export default TodoScreen;
