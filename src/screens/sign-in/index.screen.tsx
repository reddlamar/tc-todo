import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SignIn from '../../components/sign-in/index.component';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <SignIn
        email={email}
        onChangeEmail={setEmail}
        password={password}
        onChangePassword={setPassword}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
});
