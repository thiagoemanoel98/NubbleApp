import React from 'react';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import Screen from '../../../components/Screen/Screen';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Controller, useForm} from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
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

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            label="Email"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Digite seu email"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatório',
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            label="Senha"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
          />
        )}
      />

      <Text
        onPress={handleSubmit(submitForm)}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" disabled={!formState.isValid} />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        mt="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
