import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

//type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingMedium">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
