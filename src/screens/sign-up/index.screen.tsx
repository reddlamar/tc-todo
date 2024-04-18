import {View} from 'react-native';
import React from 'react';
import SignUp from '../../components/sign-up/index.component';
import {styles} from './style.screen';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default SignUpScreen;
