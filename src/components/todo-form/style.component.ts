import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';
import {MD2Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    rowGap: moderateScale(12),
    width: scale(200),
    justifyContent: 'center',
  },
  textInput: {marginHorizontal: scale(3), height: verticalScale(27)},
  text: {color: MD2Colors.white},
  addButtonContainer: {
    alignItems: 'flex-end',
  },
});
