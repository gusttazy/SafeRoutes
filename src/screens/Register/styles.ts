import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 120,
    backgroundColor: theme.colors.primary,
    position: 'relative', 
  },
  backButton: {
    position: 'absolute', 
    top: 40, 
    left: 10, 
    zIndex: 1, 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.background,
    fontFamily: 'Montserrat-Bold',
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.subTitle,
    fontFamily: 'Montserrat-Regular',
  },
  loginLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.background,
    fontFamily: 'Montserrat-Bold',
  },
  form: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10
  },
  input: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: theme.colors.subTitle,
    fontSize: 14,
  },
  inputHalf: {
    width: '48%',
  },
  button: {
    width: '60%',
    paddingVertical: 10,
    borderRadius: 0,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default styles;
