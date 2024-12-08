import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#297152',
    secondary: '#47bd8b',
    title: '#12432f',
    text: '#9eae9e',
    subTitle: '#f3f2e4',
    background: '#fffff8',
  },
  fonts: {
    regular: {
      fontFamily: 'Montserrat-Regular', 
    },
    bold: {
      fontFamily: 'Montserrat-Bold', 
    },
  },
};

export default theme;
