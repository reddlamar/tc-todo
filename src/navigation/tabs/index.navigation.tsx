import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SettingsScreen,
  TodoScreen,
  screenNames,
} from '../../screens/index.screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MD2Colors} from 'react-native-paper';
import {ParamListBase, RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const renderTabBarIcon = useCallback(
    (
      route: RouteProp<ParamListBase, string>,
      focused: boolean,
      color: string,
      size: number,
    ) => {
      let iconName: string = '';

      if (route.name === screenNames.todo) {
        iconName = focused ? 'list' : 'list-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          return renderTabBarIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: MD2Colors.blue600,
        tabBarInactiveTintColor: MD2Colors.grey600,
      })}>
      <Tab.Screen name={screenNames.todo} component={TodoScreen} />
      <Tab.Screen name={screenNames.settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
