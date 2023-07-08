import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box height={2000} backgroundColor="grayWhite">
          <Text preset="headingLarge">Thiago Emanoel</Text>

          <Icon name="bell" size={42} color="error" />
          <Icon name="eyeOn" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
