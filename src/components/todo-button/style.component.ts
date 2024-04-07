import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  addNewButton: {
    height: verticalScale(42),
    borderRadius: moderateScale(6),
    paddingHorizontal: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: moderateScale(15),
    justifyContent: 'center',
    alignContent: 'center',
  },
});
