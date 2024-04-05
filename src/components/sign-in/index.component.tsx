import {Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SignInProps} from '../../model/types.model';
import {signInWithEmailAndPassword} from '../../services/firestore/auth.firestore';
import {styles} from './style.component';

const SignIn = (props: SignInProps) => {
  const {email, onChangeEmail, password, onChangePassword} = props;

  return (
    <View style={styles.view}>
      <View style={styles.inputView}>
        <View style={styles.inputInnerView}>
          <View style={styles.labelView}>
            <Text style={[styles.text, styles.label]}>Email</Text>
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
            <Text style={[styles.text, styles.label]}>Password</Text>
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
          style={styles.button}
          accessibilityLabel="signIn"
          accessibilityRole="button"
          onPress={() => signInWithEmailAndPassword(email, password)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
