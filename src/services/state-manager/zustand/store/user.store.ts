import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';

interface UserState {
  user: FirebaseAuthTypes.User | null;
  setUser: (authorizedUser: FirebaseAuthTypes.User | undefined) => void;
}

export const useUserStore = create<UserState>()(set => ({
  user: null,
  setUser: (authorizedUser: FirebaseAuthTypes.User | undefined) => {
    set(() => ({user: authorizedUser}));
  },
}));
