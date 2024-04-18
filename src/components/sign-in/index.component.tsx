import {
  Pressable,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {SignInProps} from '../../model/types.model';
import {styles} from './style.component';

const SignIn = (props: SignInProps) => {
  const {email, onChangeEmail, password, onChangePassword, handleSignIn} =
    props;

  return (
    <KeyboardAvoidingView
      style={styles.view}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputView}>
        <View style={styles.inputInnerView}>
          <View style={styles.labelView}>
            <Text style={styles.label}>Email</Text>
          </View>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            textContentType="emailAddress"
            autoCapitalize="none"
            style={styles.textInput}
            testID="emailInput"
          />
        </View>
        <View style={styles.inputInnerView}>
          <View style={styles.labelView}>
            <Text style={styles.label}>Password</Text>
          </View>
          <TextInput
            value={password}
            onChangeText={onChangePassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            style={styles.textInput}
            testID="passwordInput"
          />
        </View>
        <Pressable
          testID="signIn"
          style={styles.button}
          accessibilityLabel="signIn"
          accessibilityRole="button"
          onPress={() => handleSignIn(email, password)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
