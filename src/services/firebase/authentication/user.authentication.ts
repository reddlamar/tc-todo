import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const authorizedUser: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(email, password);
    return authorizedUser.user;
  } catch (error) {
    console.log('Create User With Email and Password Error:', error);
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const authorizedUser: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password);
    return authorizedUser.user;
  } catch (error) {
    console.log('Sign In With Email and Password Error:', error);
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('Sign Out Error:', error);
  }
};
