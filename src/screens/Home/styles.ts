import { StyleSheet } from 'react-native';
import theme from '../../theme/theme'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '110%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Montserrat-Bold', 
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Montserrat-Regular', 
  },
  button: {
    width: '60%',
    padding: 6,
    borderRadius: 0,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 18, 
    fontFamily: 'Montserrat-Bold', 
    textAlign: 'center', 
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Montserrat-Regular', 
  },
  loginLink: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold', 
  },
});

export default styles;
