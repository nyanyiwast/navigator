import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  input: {
    width: '80%',
    borderRadius: 5,
    borderColor: 'blue',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});