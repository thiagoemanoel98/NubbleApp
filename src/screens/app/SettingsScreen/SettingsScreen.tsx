import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettigsScreen({props}: ScreenProps) {
  return (
    <Screen>
      <Text preset="headingMedium">Settings Screen</Text>
      <Button title="Home" />
    </Screen>
  );
}
