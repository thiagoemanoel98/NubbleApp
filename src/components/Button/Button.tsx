import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s10"
      height={50}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium">{title}</Text>
      )}
    </Box>
  );
}
