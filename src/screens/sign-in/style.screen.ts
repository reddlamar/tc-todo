import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';

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
    marginTop: verticalScale(12),
    rowGap: verticalScale(9),
    flex: 1,
    paddingHorizontal: scale(3),
  },
  title: {fontSize: moderateScale(30), fontWeight: 'bold'},
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: scale(6),
  },
  appDescription: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    textAlign: 'center',
  },
  lr: {color: MD2Colors.red600},
  to: {color: MD2Colors.green600},
  do: {color: MD2Colors.black},
  signUpView: {
    flexDirection: 'row',
  },
  signUpText: {
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
  signUp: {
    color: MD2Colors.blue600,
    textDecorationLine: 'underline',
  },
});
