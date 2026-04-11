import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    color: '#2f80ed',
    fontWeight: 'bold'
  },
  brand: {
    color: '#555',
    marginTop: 5
  },
  date: {
    color: '#888',
    fontSize: 12,
    marginTop: 5
  },
  deleteBtn: {
    marginTop: 10,
    backgroundColor: '#eb5757',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center'
  },
  deleteText: {
    color: 'white'
  }
});