/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  scrollable,
  canGoBack = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
