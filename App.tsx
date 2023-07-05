import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box height={2000} backgroundColor="grayWhite">
          <Text preset="headingLarge">Thiago Emanoel</Text>

          <Button title="Entrar" marginBottom="s12" backgroundColor="error" />
          <Button title="Outline" preset="outline" marginBottom="s12" />

          <Button title="Entrar" loading />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
