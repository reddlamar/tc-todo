/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// , {useEffect}
import {SafeAreaView, StatusBar} from 'react-native';
import {SignInScreen} from '../screens/index.screens';
// import auth from '@react-native-firebase/auth';
import {styles} from './style';
// import {useUserStore} from '../services/state-manager/zustand/store/user.store';

function App(): React.JSX.Element {
  // const {setUser} = useUserStore();

  // useEffect(() => {
  //   const onAuthStateChanged = (user: any) => {
  //     setUser(user);
  //   };

  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, [setUser]);

  return (
    <SafeAreaView style={[styles.safeView]}>
      <StatusBar />
      <SignInScreen />
    </SafeAreaView>
  );
}

export default App;
