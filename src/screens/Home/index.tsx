import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types'; 
import theme from '../../theme/theme';
import styles from './styles';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/header-img.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.title, fontWeight: 'normal' }]}>
          Bem-vindo ao SafeRoutes!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text, fontWeight: 'normal' }]}>
          Garanta uma viagem segura e tranquila, com alertas em tempo real e monitoramento constante.
        </Text>

        <Button
          mode="contained"
          style={styles.button}
          buttonColor={theme.colors.primary}
          textColor={theme.colors.background}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('Register')} 
        >
          Começar agora
        </Button>

        <Text style={[styles.loginText, { color: theme.colors.text }]}>
          Já possui uma conta?{' '}
          <Text
            style={[styles.loginLink, { color: theme.colors.primary }]}
            onPress={() => navigation.navigate('Login')} 
          >
            Entrar
          </Text>
        </Text>
      </View>
    </View>
  );
}
