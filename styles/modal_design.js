import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modal: {
    backgroundColor: '#1a2535',
    borderRadius: 16,
    padding: 24,
    borderTopWidth: 4,
    borderTopColor: '#e8a020',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerAccent: {
    width: 4,
    height: 22,
    backgroundColor: '#e8a020',
    borderRadius: 2,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  divider: {
    height: 1,
    backgroundColor: '#243044',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#243044',
  },
  label: {
    fontSize: 13,
    color: '#6b7a8d',
    fontWeight: '600',
  },
  value: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
    maxWidth: '60%',
    textAlign: 'right',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  btn: {
    flex: 1,
    backgroundColor: '#1a2535',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#243044',
  },
  btnText: {
    color: '#6b7a8d',
    fontWeight: 'bold',
    fontSize: 15,
  },
  btnEdit: {
    flex: 1,
    backgroundColor: '#e8a020',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#e8a020',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  btnEditText: {
    color: '#0f1923',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
