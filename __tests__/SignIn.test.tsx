import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import {SignInScreen} from '../src/screens/index.screens';
import auth from '@react-native-firebase/auth';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    signInWithEmailAndPassword: jest.fn(),
  });
});

beforeAll(() => {
  render(<SignInScreen />);
});

describe('testing the sign page content and sign in with email and password functionality using firebase auth', () => {
  it('should show Text that says "Sign In"', () => {
    const text = screen.getByText('Sign In');
    const expectedType = 'Text';
    const actualType = text.type;
    const expectedText = 'Sign In';
    const actualText = text.children[0];
    expect(actualType).toBe(expectedType);
    expect(actualText).toMatch(expectedText);
  });

  it('should show Text that says "Email"', () => {
    render(<SignInScreen />);
    const text = screen.getByText('Email');
    const expectedText = 'Email';
    const actualText = text.children[0];
    const expectedType = 'Text';
    const actualType = text.type;
    expect(actualText).toBe(expectedText);
    expect(actualType).toBe(expectedType);
  });

  it('should show a TextInput component for email', () => {
    render(<SignInScreen />);
    const textInput = screen.getByTestId('emailInput');
    const expectedType = 'TextInput';
    const actualType = textInput.type;
    expect(actualType).toBe(expectedType);
  });

  it('should change text of TextInput component for email', async () => {
    render(<SignInScreen />);
    const textInput = screen.getByTestId('emailInput');
    const user = userEvent.setup();
    await user.clear(textInput);
    const expectedInput = 'lamar@gmail.com';
    await user.type(textInput, expectedInput);
    const actualInput = textInput.props.value;
    expect(actualInput).toBe(expectedInput);
  });

  it('should show Text that says "Password"', () => {
    render(<SignInScreen />);
    const text = screen.getByText('Password');
    const expectedText = 'Password';
    const actualText = text.children[0];
    const expectedType = 'Text';
    const actualType = text.type;
    expect(actualText).toBe(expectedText);
    expect(actualType).toBe(expectedType);
  });

  it('should change text of TextInput component for password', async () => {
    render(<SignInScreen />);
    const textInput = screen.getByTestId('passwordInput');
    const user = userEvent.setup();
    await user.clear(textInput);
    const expectedInput = '123456';
    await user.type(textInput, expectedInput);
    const actualInput = textInput.props.value;
    expect(actualInput).toBe(expectedInput);
  });

  it('should see a button with the text "Sign In"', () => {
    render(<SignInScreen />);
    const button = screen.getByRole('button', {name: 'signIn'});
    const expectedType = 'signIn';
    expect(button.props.accessibilityLabel).toBe(expectedType);
  });

  it('should display the app name and what the app does', () => {});

  it('should return user after executing the firebase auth method signInWithEmailAndPassword()', () => {
    const actual = (
      auth().signInWithEmailAndPassword as jest.Mock<any>
    ).mockReturnValue({
      displayName: null,
      email: 'lamar@gmail.com',
      emailVerified: true,
      isAnonymous: false,
      uid: 1,
    });

    expect(actual()).toEqual({
      displayName: null,
      email: 'lamar@gmail.com',
      emailVerified: true,
      isAnonymous: false,
      uid: 1,
    });
  });
});
