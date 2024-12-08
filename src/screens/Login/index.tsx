import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import theme from '../../theme/theme';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left" 
            size={24}
            iconColor={theme.colors.background}
            onPress={() => navigation.navigate('Home')} 
            style={styles.backButton} 
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Não possuí uma conta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            label="E-mail"
            mode="outlined"
            style={styles.input}
            theme={{ colors: { background: theme.colors.subTitle } }}
          />
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            theme={{ colors: { background: theme.colors.subTitle } }}
          />
          <Button
            mode="contained"
            style={styles.button}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
            labelStyle={styles.buttonText}
            onPress={() => console.log('Login pressed')}
          >
            Entrar
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
