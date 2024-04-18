import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

export const addUser = async (
  user: FirebaseAuthTypes.User,
  displayName: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const response = await firebase
      .firestore()
      .collection('Users')
      .doc(user.uid)
      .set({
        email: user.email,
        displayName,
        firstName,
        lastName,
      });
    console.log('Add new user', response);
  } catch (error) {
    console.log('Add User Error:', error);
  }
};

export const getUser = async (useId: string) => {
  try {
    const user = await firebase
      .firestore()
      .collection('Users')
      .doc(useId)
      .get();
    return user.data();
  } catch (error) {
    console.log('Get User Error:', error);
  }
};

export const updateUser = () => null;

export const deleteUser = () => null;
