import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabs from './src/navigations/bottomTabs';
import AppNavigator from './src/navigations/appnavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
         <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}