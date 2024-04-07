import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    rowGap: 9,
    flex: 1,
  },
  title: {fontSize: 30, fontWeight: 'bold'},
  appDescription: {fontSize: 24, fontWeight: '600', textAlign: 'center'},
});
