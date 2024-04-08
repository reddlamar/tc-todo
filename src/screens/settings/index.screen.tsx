import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {signOut} from '../../services/firestore/auth.firestore';
import {useUserStore} from '../../services/state-manager/zustand/store/user.store';
import {styles} from './style.screen';

const SettingsScreen = () => {
  const {setUser} = useUserStore();

  const handleOnPress = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <View style={styles.view}>
      <Pressable onPress={handleOnPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
