import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
    rowGap: moderateScale(9),
    borderRightColor: MD2Colors.grey400,
    borderRightWidth: scale(1),
    marginHorizontal: moderateScale(15),
  },
  itemTextContainer: {
    height: verticalScale(100),
    marginHorizontal: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: verticalScale(21),
  },
  checkboxIcon: {borderColor: MD2Colors.blue600},
  checkboxInnerIcon: {borderWidth: moderateScale(2)},
  checkboxContainer: {
    borderRadius: moderateScale(9),
  },
  taskDescription: {width: scale(120)},
  title: {
    color: MD2Colors.grey600,
    fontSize: moderateScale(18),
    flexWrap: 'wrap',
  },
  itemLeftSide: {
    height: verticalScale(45),
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(6),
  },
  completedText: {color: MD2Colors.blue600},
  inCompletedText: {color: MD2Colors.red600},
  sideItemText: {
    color: MD2Colors.grey800,
    fontWeight: '500',
    fontSize: moderateScale(9),
    transform: [{rotate: '270deg'}],
    margin: moderateScale(9),
  },
  duration: {
    color: MD2Colors.grey600,
    fontSize: moderateScale(12),
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    padding: moderateScale(0),
    margin: moderateScale(0),
    width: scale(30),
    height: verticalScale(30),
  },
});
