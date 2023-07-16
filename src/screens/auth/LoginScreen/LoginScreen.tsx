import React from 'react';
//import {Text} from '../../../components/Text/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {LoginSchemaType, loginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  FormPasswordTextInput,
} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchemaType) {
    navigation.navigate('SignUpScreen');
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={navigateToForgotPassword}>
        Esqueci minha senha
      </Text>
      <Button
        mt="s48"
        title="Entrar"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        mt="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
