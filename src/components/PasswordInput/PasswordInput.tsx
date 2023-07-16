import {Icon, TextInput, TextInputProps} from '@components';
import React, {useState} from 'react';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  // hitslop = distancia adicional de toque

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      rightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
      {...props}
    />
  );
}
