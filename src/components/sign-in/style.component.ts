import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {fontSize: 45, fontWeight: 'bold'},
  inputView: {
    borderWidth: 3,
    borderColor: 'gold',
    borderRadius: 9,
    width: 330,
    alignItems: 'center',
    rowGap: 9,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  inputInnerView: {justifyContent: 'center', alignItems: 'center'},
  labelView: {alignSelf: 'flex-start'},
  label: {color: 'black', fontSize: 15, fontWeight: '600'},
  textInput: {
    width: 300,
    height: 33,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'gold',
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 9,
    marginVertical: 9,
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: 'black',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gold',
  },
  buttonText: {
    color: 'gold',
    fontSize: 18,
  },
});
