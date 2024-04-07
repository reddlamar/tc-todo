import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignIn from '../../components/sign-in/index.component';
import {signInWithEmailAndPassword} from '../../services/firestore/auth.firestore';
import {styles} from './style.screen';
import {useUserStore} from '../../services/state-manager/zustand/store/user.store';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useUserStore();

  const handleSignIn = async () => {
    const user = await signInWithEmailAndPassword(email, password);
    setUser(user);
  };

  return (
    <View style={styles.view}>
      <View style={styles.appNameView}>
        <View style={styles.titleView}>
          <Text style={[styles.lr, styles.title]}>LR</Text>
          <Text style={[styles.to, styles.title]}>To</Text>
          <Text style={[styles.do, styles.title]}>Do</Text>
        </View>
        <Text style={styles.appDescription}>
          This app that will help you manage your tasks.
        </Text>
        <View style={styles.signUpView}>
          <Pressable>
            <Text style={[styles.signUpText, styles.signUp]}>Sign Up</Text>
          </Pressable>
          <Text style={styles.signUpText}>Today.</Text>
        </View>
      </View>
      <SignIn
        email={email}
        onChangeEmail={setEmail}
        password={password}
        onChangePassword={setPassword}
        handleSignIn={handleSignIn}
      />
    </View>
  );
};

export default SignInScreen;
