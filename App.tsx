import React from 'react';
import {View} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App() {
  return (
    <View>
      <Text preset="headingLarge">App</Text>
      <Text preset="headingMedium" italic>
        App
      </Text>
      <Text preset="headingSmall" bold italic>
        App
      </Text>
    </View>
  );
}
