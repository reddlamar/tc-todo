import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen,
  SignUpScreen,
  screenNames,
} from '../screens/index.screens';
import {useUserStore} from '../services/state-manager/zustand/store/user.store';
import Tabs from './tabs/index.navigation';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user} = useUserStore();

  const renderNavigator = useCallback(() => {
    if (user) {
      return (
        <Stack.Group>
          <Stack.Screen name={'Tabs'} component={Tabs} />
        </Stack.Group>
      );
    }

    return (
      <Stack.Group>
        <Stack.Screen name={screenNames.signIn} component={SignInScreen} />
        <Stack.Screen name={screenNames.signUp} component={SignUpScreen} />
      </Stack.Group>
    );
  }, [user]);

  return <Stack.Navigator>{renderNavigator()}</Stack.Navigator>;
};

export default Navigation;
