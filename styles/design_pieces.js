import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#1a2535',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#e8a020',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 11,
    color: '#6b7a8d',
    marginRight: 4,
  },
  date: {
    fontSize: 12,
    color: '#e8a020',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#243044',
    marginVertical: 10,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#2d1515',
    borderWidth: 1,
    borderColor: '#c0392b',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  deleteText: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
