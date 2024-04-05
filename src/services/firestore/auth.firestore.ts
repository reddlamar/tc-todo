import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

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
