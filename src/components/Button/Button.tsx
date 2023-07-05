import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading, ...TouchableBoxProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s10"
      borderRadius={'s12'}
      height={50}
      alignItems="center"
      justifyContent="center"
      {...TouchableBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
