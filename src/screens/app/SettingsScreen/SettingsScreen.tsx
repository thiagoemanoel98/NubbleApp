/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function SettigsScreen({props}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingMedium">Settings Screen</Text>
      <Button title="Home" />
    </Screen>
  );
}
