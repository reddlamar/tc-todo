import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: MD2Colors.red600,
    borderRadius: moderateScale(9),
    borderWidth: scale(1),
    borderColor: MD2Colors.black,
    paddingHorizontal: scale(9),
    paddingVertical: verticalScale(3),
  },
  buttonText: {
    fontSize: moderateScale(21),
    fontWeight: '600',
    color: MD2Colors.white,
  },
});
