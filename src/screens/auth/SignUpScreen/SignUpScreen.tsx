import React from 'react';
import Screen from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import TextInput from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Controller, useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordTextInput} from '../../../components/Form/FormPasswordTextInput';

type SignUpFormType = {
  username: string;
  fullname: string;
  email: string;
  password: string;
};

export default function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
      username: '',
    },
    mode: 'onChange',
  });

  function submitForm(formData: SignUpFormType) {
    console.log(formData);
    /**reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });*/
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullname"
        rules={{required: 'nome é obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{required: 'Email é obrigatório'}}
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordTextInput
        control={control}
        name="password"
        rules={{required: 'Senha é obrigatório'}}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Button
        title="Criar uma conta"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
