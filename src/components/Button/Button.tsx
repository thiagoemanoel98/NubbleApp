import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  preset = 'primary',
  title,
  loading,
  disabled,
  ...TouchableBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s10"
      borderRadius={'s12'}
      height={50}
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...TouchableBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" color={buttonPreset.content} bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
