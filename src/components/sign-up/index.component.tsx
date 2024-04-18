import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {Avatar, MD2Colors, TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {createUserWithEmailAndPassword} from '../../services/firebase/authentication/user.authentication';
import {scale} from 'react-native-size-matters';
import {addUser} from '../../services/firebase/firestore/user.firestore';
import {styles} from './style.component';
import {useUserStore} from '../../services/state-manager/zustand/store/user.store';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email!').required('Required'),
  password: Yup.string()
    .min(6, 'Need at least 6 characters')
    .required('Required'),
  displayName: Yup.string().required('Required'),
  firstName: Yup.string()
    .min(2, 'Need at least 2 characters')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Need at least 2 characters')
    .required('Required'),
});

const SignUp = () => {
  const {setUser} = useUserStore();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      displayName: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: SignInSchema,
    onSubmit: values => console.log('Values:', values),
  });

  const handleOnPressSignUp = async () => {
    const user = await createUserWithEmailAndPassword(
      formik.values.email,
      formik.values.password,
    );

    if (user) {
      await addUser(
        user,
        formik.values.displayName,
        formik.values.firstName,
        formik.values.lastName,
      );
      setUser(user);
      console.log('new user', user);
    }
  };

  const invalidTextInputColorPassword = formik.errors.password
    ? MD2Colors.red600
    : MD2Colors.blue600;

  const invalidTextInputColorEmail = formik.errors.email
    ? MD2Colors.red600
    : MD2Colors.blue600;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Avatar.Icon
          icon="account-plus"
          color={MD2Colors.white}
          style={{backgroundColor: MD2Colors.blue600}}
          size={scale(100)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.email}>Email</Text>
          <TextInput
            mode="outlined"
            outlineColor={invalidTextInputColorEmail}
            activeOutlineColor={MD2Colors.blue600}
            autoFocus
            style={styles.textInput}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            autoCapitalize="none"
          />
          <Text style={styles.invalidText}>
            {formik.errors.email && formik.touched && formik.errors.email}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.email}>First Name</Text>
          <TextInput
            mode="outlined"
            outlineColor={invalidTextInputColorEmail}
            activeOutlineColor={MD2Colors.blue600}
            style={styles.textInput}
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
            autoCapitalize="none"
          />
          <Text style={styles.invalidText}>
            {formik.errors.firstName &&
              formik.touched &&
              formik.errors.firstName}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.email}>Last Name</Text>
          <TextInput
            mode="outlined"
            outlineColor={invalidTextInputColorEmail}
            activeOutlineColor={MD2Colors.blue600}
            style={styles.textInput}
            value={formik.values.lastName}
            onChangeText={formik.handleChange('lastName')}
            autoCapitalize="none"
          />
          <Text style={styles.invalidText}>
            {formik.errors.lastName && formik.touched && formik.errors.lastName}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.email}>Display Name</Text>
          <TextInput
            mode="outlined"
            outlineColor={invalidTextInputColorEmail}
            activeOutlineColor={MD2Colors.blue600}
            style={styles.textInput}
            value={formik.values.displayName}
            onChangeText={formik.handleChange('displayName')}
            autoCapitalize="none"
          />
          <Text style={styles.invalidText}>
            {formik.errors.displayName &&
              formik.touched &&
              formik.errors.displayName}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.password}>Password</Text>
          <TextInput
            mode="outlined"
            outlineColor={invalidTextInputColorPassword}
            activeOutlineColor={MD2Colors.blue600}
            style={[styles.textInput]}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry
            autoCapitalize="none"
          />
          <Text style={styles.invalidText}>
            {formik.errors.password && formik.touched && formik.errors.password}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.loginButton}
            onPress={() => {
              handleOnPressSignUp();
            }}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
