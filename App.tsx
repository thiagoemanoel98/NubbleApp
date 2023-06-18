import React from 'react';
import {View} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App() {
  return (
    <View>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-BoldItalic'}}>
        App
      </Text>
      <Text preset="headingMedium">App</Text>
      <Text preset="headingSmall">App</Text>
    </View>
  );
}
