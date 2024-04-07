import {Text, View} from 'react-native';
import React, {useState} from 'react';
import SignIn from '../../components/sign-in/index.component';
import {signInWithEmailAndPassword} from '../../services/firestore/auth.firestore';
import {styles} from './style.screen';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <View style={styles.appNameView}>
        <Text style={styles.title}>To Do App</Text>
        <Text style={styles.appDescription}>
          The app that will help you manage your task.
        </Text>
      </View>
      <SignIn
        email={email}
        onChangeEmail={setEmail}
        password={password}
        onChangePassword={setPassword}
        handleSignIn={signInWithEmailAndPassword}
      />
    </View>
  );
};

export default SignInScreen;
