import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettigsScreen} from '@screens';

import {AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettigsScreen} />
    </Stack.Navigator>
  );
}
