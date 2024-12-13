import React from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { useFonts } from '@expo-google-fonts/montserrat';
import theme from './src/theme/theme';
import Routes from './src/routes'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('@expo-google-fonts/montserrat/Montserrat_400Regular.ttf'),
    'Montserrat-Bold': require('@expo-google-fonts/montserrat/Montserrat_700Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const appTheme = {
    ...DefaultTheme,
    typography: {
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
      },
    },
    colors: theme.colors,
  };

  return (
    <PaperProvider theme={appTheme}>
      <Routes /> 
    </PaperProvider>
  );
}
