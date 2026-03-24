import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
import SeeAllScreen from '../screens/seeall';
import { RootStackParamList } from '../utils/linking';
import { Checkout, SearchProducts, Settings } from '../screens';
import ProductDetails from '../screens/productdetails';
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
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        name="SearchProducts"
        component={SearchProducts}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
}