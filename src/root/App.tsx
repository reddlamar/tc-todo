/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// , {useEffect}
import {styles} from './style';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '../navigation/index.navigation';
// import auth from '@react-native-firebase/auth';
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
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
