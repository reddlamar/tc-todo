import {StyleSheet, View} from 'react-native';
import React from 'react';
import SignIn from '../../components/sign-in/index.component';

const SignInScreen = () => {
  return (
    <View style={styles.view}>
      <SignIn />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
});
