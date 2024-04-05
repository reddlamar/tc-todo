/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SignInScreen} from '../screens/index.screens';
import auth from '@react-native-firebase/auth';
import {styles} from './style';
import {useUserStore} from '../services/state-manager/zustand/store/user.store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {setUser} = useUserStore();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      setUser(user);
    };

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [setUser]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SignInScreen />
    </SafeAreaView>
  );
}

export default App;
