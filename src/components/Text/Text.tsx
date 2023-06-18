import React from 'react';
// sem export default -> forçar a utilização do nome do componente
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

// preset: valores predefinidos
interface TextProps extends RNTextProps {
  preset: TextVariants;
}

export function Text({children, preset, style, ...rest}: TextProps) {
  return (
    <RNText style={[$fontSizes[preset], style]} {...rest}>
      {children}
    </RNText>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

// Record mapeia 2 interfaces
// Para cada chave do Type, um valor textStyle

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};
