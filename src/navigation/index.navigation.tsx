import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, TodoScreen, screenNames} from '../screens/index.screens';
import {useUserStore} from '../services/state-manager/zustand/store/user.store';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user} = useUserStore();

  const renderNavigator = useCallback(() => {
    if (user) {
      return (
        <Stack.Group>
          <Stack.Screen name={screenNames.todo} component={TodoScreen} />
        </Stack.Group>
      );
    }

    return (
      <Stack.Group>
        <Stack.Screen name={screenNames.signIn} component={SignInScreen} />
      </Stack.Group>
    );
  }, [user]);

  return <Stack.Navigator>{renderNavigator()}</Stack.Navigator>;
};

export default Navigation;
