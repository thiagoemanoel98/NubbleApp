/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import TextInput from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label="Email"
          placeholder="Digite seu email"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          errorMessage="Senha inválida"
          label="Senha"
          placeholder="Digite sua senha"
          rightComponent={<Icon name="eyeOn" color="gray2" />}
          boxProps={{mb: 's10'}}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
        <Button mt="s48" title="Entrar" />
        <Button preset="outline" mt="s12" title="Criar uma conta" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
