/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettigsScreen({props}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingMedium">Settings Screen</Text>
      <Button title="Home" />
    </Screen>
  );
}
