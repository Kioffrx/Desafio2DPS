import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#2f80ed',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  }
});