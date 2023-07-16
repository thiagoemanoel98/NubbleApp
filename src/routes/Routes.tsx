import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IconProps} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

// fullScreenGestureEnabled = Gestos de navegação sao detectados na tela inteira
// Não apenas na ponta (IOS)

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

export function Router() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
