import {
  FirebaseFirestoreTypes,
  firebase,
} from '@react-native-firebase/firestore';
import {Task} from '../../model/types.model';

export const addToTasks = async (task: Task) => {
  try {
    await firebase.firestore().collection('Tasks').add(task);
    return true;
  } catch (error) {
    console.log('Add Task Error:', error);
    return false;
  }
};

export const getTaskCollection = async (userId: string) => {
  try {
    const querySnapshot: FirebaseFirestoreTypes.QuerySnapshot = await firebase
      .firestore()
      .collection('Tasks')
      .where('userId', '==', userId)
      .get();
    return querySnapshot.docs.map(d => ({
      id: d.id,
      userId: d.data().userId,
      title: d.data().title,
      completed: d.data().completed,
    }));
  } catch (error) {
    console.log('Get Tasks Error:', error);
  }
};

export const updateTaskCollection = async (task: Task) => {
  try {
    await firebase.firestore().collection('Tasks').doc(task.id).update(task);
    return true;
  } catch (error) {
    console.log('Update Task Error:', error);
    return false;
  }
};

export const deleteFromTaskCollection = async (id: string | undefined) => {
  try {
    if (id) {
      await firebase.firestore().collection('Tasks').doc(id).delete();
      return true;
    }
    throw Error('Cannot delete task.');
  } catch (error) {
    console.log('Delete Task Error:', error);
    return false;
  }
};
