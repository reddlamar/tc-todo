/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
// , {useEffect}
import {styles} from './style';
import {SafeAreaView, StatusBar, Animated, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from '../navigation/index.navigation';
import BootSplash from 'react-native-bootsplash';
// import auth from '@react-native-firebase/auth';
// import {useUserStore} from '../services/state-manager/zustand/store/user.store';

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash_manifest.json'),
    logo: require('../../assets/bootsplash_logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 1000,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Image {...logo} style={styles.image} />
    </Animated.View>
  );
};

function App(): React.JSX.Element {
  // const {setUser} = useUserStore();

  // useEffect(() => {
  //   const onAuthStateChanged = (user: any) => {
  //     setUser(user);
  //   };

  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, [setUser]);

  // useEffect(() => {
  //   const init = async () => {
  //     await BootSplash.hide({fade: true});
  //     console.log('BootSplash has been hidden successfully');
  //   };

  //   init();
  // }, []);

  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <AnimatedBootSplash
        onAnimationEnd={() => {
          setVisible(false);
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={styles.gestureRootView}>
      <SafeAreaView style={[styles.safeView]}>
        <StatusBar />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
