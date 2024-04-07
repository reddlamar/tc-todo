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
    return querySnapshot.docs.map(d => ({id: d.id, ...d.data()}));
  } catch (error) {
    console.log('Get Tasks Error:', error);
  }
};
