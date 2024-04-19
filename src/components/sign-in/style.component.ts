import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {fontSize: moderateScale(45), fontWeight: 'bold'},
  inputView: {
    borderWidth: scale(3),
    borderColor: MD2Colors.red600,
    borderRadius: moderateScale(9),
    width: scale(330),
    alignItems: 'center',
    rowGap: verticalScale(9),
    backgroundColor: MD2Colors.white,
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(12),
  },
  inputInnerView: {justifyContent: 'center', alignItems: 'center'},
  labelView: {alignSelf: 'flex-start'},
  label: {
    color: MD2Colors.black,
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
  textInput: {
    width: scale(300),
    height: verticalScale(33),
    borderWidth: scale(1),
    borderRadius: moderateScale(6),
    borderColor: MD2Colors.black,
    backgroundColor: MD2Colors.white,
    color: MD2Colors.black,
    paddingHorizontal: scale(9),
    marginVertical: verticalScale(9),
  },
  button: {
    width: scale(300),
    height: verticalScale(42),
    backgroundColor: MD2Colors.green600,
    borderRadius: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: MD2Colors.black,
  },
  buttonText: {
    color: MD2Colors.white,
    fontSize: moderateScale(18),
  },
});
