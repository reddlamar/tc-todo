import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD2Colors.blue600,
  },
  topInnerContainer: {
    backgroundColor: MD2Colors.blue600,
    flexDirection: 'row',
    margin: moderateScale(12),
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  todayText: {color: MD2Colors.white, fontSize: moderateScale(18)},
  taskCount: {
    color: MD2Colors.white,
    opacity: 0.8,
    fontSize: moderateScale(12),
  },
  buttonContainer: {backgroundColor: MD2Colors.blue600},
  addNewButton: {
    width: scale(100),
    height: verticalScale(40),
    borderRadius: moderateScale(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {fontSize: moderateScale(12)},
  bottomInnerContainer: {
    backgroundColor: MD2Colors.white,
    borderTopLeftRadius: moderateScale(30),
    flex: 6,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(12),
    marginVertical: verticalScale(15),
    alignItems: 'center',
    columnGap: verticalScale(12),
  },
  dateTextContainer: {
    backgroundColor: MD2Colors.blue600,
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(12),
  },
  dateOfMonth: {color: MD2Colors.white, fontSize: moderateScale(15)},
  dayOfWeek: {color: MD2Colors.white, fontSize: moderateScale(12)},
  hoursPerDay: {color: MD2Colors.grey600, fontSize: moderateScale(15)},
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 6,
  },
  loadingView: {justifyContent: 'center', alignItems: 'center'},
  emptyText: {fontSize: 30, fontWeight: 'bold', color: MD2Colors.blue600},
});
