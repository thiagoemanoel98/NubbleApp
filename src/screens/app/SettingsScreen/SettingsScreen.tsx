import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettigsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingMedium">Settings Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'NewPostScreen'})
        }
      />
    </Screen>
  );
}
