import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginBottom: 30,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textBoxContainer: {
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    width: 150,
    alignItems: 'center',
  },
  textBoxContainerPressed: {
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    width: 150,
    alignItems: 'center',
  },
});

export default styles;