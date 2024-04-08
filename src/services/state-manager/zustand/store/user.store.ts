import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';

interface UserState {
  user: FirebaseAuthTypes.User | null;
  setUser: (authorizedUser: FirebaseAuthTypes.User | undefined | null) => void;
}

export const useUserStore = create<UserState>()(set => ({
  user: null,
  setUser: (authorizedUser: FirebaseAuthTypes.User | undefined | null) => {
    set(() => ({user: authorizedUser}));
  },
}));
