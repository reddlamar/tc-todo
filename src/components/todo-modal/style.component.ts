import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {MD2Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(22),
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: MD2Colors.blue600,
    borderColor: MD2Colors.white,
    borderWidth: scale(1),
    borderRadius: moderateScale(30),
    padding: moderateScale(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: scale(0),
      height: verticalScale(2),
    },
    position: 'relative',
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(4),
    elevation: moderateScale(5),
    rowGap: moderateScale(9),
  },
  iconButton: {
    position: 'absolute',
    top: moderateScale(1),
    right: moderateScale(3),
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'relative',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: MD2Colors.white,
  },
  button: {
    borderRadius: moderateScale(9),
    padding: moderateScale(10),
    elevation: moderateScale(2),
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: moderateScale(15),
    textAlign: 'center',
  },
});
