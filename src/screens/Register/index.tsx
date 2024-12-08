import React from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme/theme';
import styles from './styles';

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left" 
          size={24}
          iconColor={theme.colors.background}
          onPress={() => navigation.navigate('Home')} 
          style={styles.backButton} 
        />
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.subtitle}>
          Já possui uma conta?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')} 
          >
            Entrar
          </Text>
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputRow}>
          <TextInput
            label="Nome"
            mode="outlined"
            style={[styles.input, styles.inputHalf]}
            theme={{ colors: { background: theme.colors.subTitle } }}
          />
          <TextInput
            label="Sobrenome"
            mode="outlined"
            style={[styles.input, styles.inputHalf]}
            theme={{ colors: { background: theme.colors.subTitle } }}
          />
        </View>

        <TextInput
          label="E-mail"
          mode="outlined"
          style={styles.input}
          theme={{ colors: { background: theme.colors.subTitle } }}
        />
        <TextInput
          label="Confirmar E-mail"
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
        <TextInput
          label="Confirmar Senha"
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
          onPress={() => console.log('Register pressed')}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
}
