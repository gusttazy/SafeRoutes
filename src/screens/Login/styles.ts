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
    textAlign: 'center',
  },
  registerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.background,
    fontFamily: 'Montserrat-Bold',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 80,
  },
  input: {
    width: '80%',
    marginBottom: 15,
    backgroundColor: theme.colors.subTitle,
    fontSize: 14,
  },
  button: {
    width: '50%',
    paddingVertical: 10,
    borderRadius: 0,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
