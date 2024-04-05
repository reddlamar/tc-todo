import {
  render,
  //   renderHook,
  screen,
  userEvent,
} from '@testing-library/react-native';
import React from 'react';
import {SignInScreen} from '../src/screens/index.screens';
// import {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {useUserStore} from '../src/services/state-manager/zustand/store/user.store';

test('Should show Text that says "Sign In"', () => {
  render(<SignInScreen />);
  const text = screen.getByText('Sign In');
  const expectedType = 'Text';
  const actualType = text.type;
  const expectedText = 'Sign In';
  const actualText = text.children[0];
  expect(actualType).toBe(expectedType);
  expect(actualText).toMatch(expectedText);
});

test('Should show Text that says "Email"', () => {
  render(<SignInScreen />);
  const text = screen.getByText('Email');
  const expectedText = 'Email';
  const actualText = text.children[0];
  const expectedType = 'Text';
  const actualType = text.type;
  expect(actualText).toBe(expectedText);
  expect(actualType).toBe(expectedType);
});

test('Should show a TextInput component for email', () => {
  render(<SignInScreen />);
  const textInput = screen.getByTestId('emailInput');
  const expectedType = 'TextInput';
  const actualType = textInput.type;
  expect(actualType).toBe(expectedType);
});

test('Should change text of TextInput component for email', async () => {
  render(<SignInScreen />);
  const textInput = screen.getByTestId('emailInput');
  const user = userEvent.setup();
  await user.clear(textInput);
  const expectedInput = 'lamar@gmail.com';
  await user.type(textInput, expectedInput);
  const actualInput = textInput.props.value;
  expect(actualInput).toBe(expectedInput);
});

test('Should show Text that says "Password"', () => {
  render(<SignInScreen />);
  const text = screen.getByText('Password');
  const expectedText = 'Password';
  const actualText = text.children[0];
  const expectedType = 'Text';
  const actualType = text.type;
  expect(actualText).toBe(expectedText);
  expect(actualType).toBe(expectedType);
});

test('Should change text of TextInput component for password', async () => {
  render(<SignInScreen />);
  const textInput = screen.getByTestId('passwordInput');
  const user = userEvent.setup();
  await user.clear(textInput);
  const expectedInput = '123456';
  await user.type(textInput, expectedInput);
  const actualInput = textInput.props.value;
  expect(actualInput).toBe(expectedInput);
});

test('Should see a button with the text "Sign In"', () => {
  render(<SignInScreen />);
  const button = screen.getByRole('button', {name: 'signIn'});
  const expectedType = 'signIn';
  expect(button.props.accessibilityLabel).toBe(expectedType);
});

jest.mock('@react-native-firebase/auth', () => ({
  FirebaseAuthTypes: {
    UserCredential: jest.fn().mockReturnValue({email: 'lamar@gmail.com'}),
  },
}));

// test('Should get user after signing in', async () => {
//   render(<SignInScreen />);
//   const expectedEmail = 'lamar@gmail.com';
//   const expectedPassword = '123456';
//   const {result} = renderHook(() => useUserStore());
//   const button = screen.getByRole('button', {name: 'signIn'});
//   const passwordInput = screen.getByTestId('passwordInput');
//   const emailInput = screen.getByTestId('emailInput');
//   const userSetup = userEvent.setup();
//   await userSetup.clear(emailInput);
//   await userSetup.clear(passwordInput);
//   await userSetup.type(emailInput, expectedEmail);
//   await userSetup.type(passwordInput, expectedPassword);
//   await userSetup.press(button);
//   expect(result.current.user?.email).toBe(expectedEmail);
// });
