// navigation/AppNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
import SeeAllScreen from '../screens/seeall';
import { RootStackParamList } from '../utils/linking';
import { Settings } from '../screens';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SeeAll"
        component={SeeAllScreen}
      />
       <Stack.Screen
        name="Settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
}