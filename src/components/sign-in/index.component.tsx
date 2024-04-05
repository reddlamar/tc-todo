import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      {/* <Text style={[styles.text, styles.title]}>Sign In</Text> */}
      <View style={styles.inputView}>
        <View style={styles.inputInnerView}>
          <View style={styles.labelView}>
            <Text style={[styles.text, styles.label]}>Email</Text>
          </View>
          <TextInput
            value={email}
            onChangeText={setEmail}
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
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            style={styles.textInput}
            testID="passwordInput"
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'skyblue'},
  title: {fontSize: 45, fontWeight: 'bold'},
  inputView: {
    borderWidth: 3,
    borderColor: 'gold',
    borderRadius: 9,
    width: 330,
    // height: 330,
    alignItems: 'center',
    rowGap: 9,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  inputInnerView: {justifyContent: 'center', alignItems: 'center'},
  labelView: {alignSelf: 'flex-start'},
  label: {color: 'black', fontSize: 15, fontWeight: '600'},
  textInput: {
    width: 300,
    height: 33,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'gold',
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 9,
    marginVertical: 9,
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: 'black',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'gold',
    fontSize: 18,
  },
});
