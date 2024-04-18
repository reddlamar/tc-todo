import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    height: verticalScale(700),
    width: scale(330),
    margin: moderateScale(12),
    paddingVertical: verticalScale(12),
    alignItems: 'center',
    rowGap: moderateScale(45),
    backgroundColor: MD2Colors.grey100,
    borderRadius: moderateScale(12),
  },
  icon: {
    backgroundColor: MD2Colors.white,
    borderWidth: scale(3),
    borderColor: MD2Colors.white,
  },
  textInput: {
    borderRadius: moderateScale(6),
    borderWidth: scale(1),
    borderColor: MD2Colors.grey50,
    width: scale(200),
    height: verticalScale(36),
    fontSize: moderateScale(15),
  },
  login: {
    fontSize: moderateScale(36),
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  loginLabel: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {justifyContent: 'center', rowGap: moderateScale(6)},
  innerContainer: {rowGap: moderateScale(3)},
  email: {fontSize: moderateScale(15), paddingStart: moderateScale(6)},
  passwordContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  password: {fontSize: moderateScale(15), paddingStart: moderateScale(6)},
  forgotPassword: {
    fontSize: moderateScale(12),
    color: MD2Colors.grey900,
    paddingStart: moderateScale(6),
  },
  buttonContainer: {justifyContent: 'center'},
  loginButton: {
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(9),
    borderRadius: moderateScale(9),
    backgroundColor: MD2Colors.blue600,
  },
  loginButtonText: {color: MD2Colors.white, textAlign: 'center'},
  invalidText: {color: MD2Colors.red600},
});
