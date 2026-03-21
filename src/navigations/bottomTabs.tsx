import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/searchproducts';
import ProductsScreen from '../screens/products';
import ProfileScreen from '../screens/myprofile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
    home,
    myprofile,
    products,
    search,
} from '../assets/svgs';
const Tab = createBottomTabNavigator();

const Icon = ({ label }: { label: string }) => <Text>{label}</Text>;

export default function BottomTabs() {
    const insets = useSafeAreaInsets();
    const renderIcon = (xml: string, color: string) => (
        <SvgXml xml={xml.replace(/currentColor/g, color)} width={24} height={24} />
    );
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#007AFF',   // 🔵 selected (blue)
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: '#fff',
                },
                tabBarItemStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarIconStyle: {
                    marginTop: 0,   // 🔥 remove default offset
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => renderIcon(home, color),
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => renderIcon(search, color),
                }}
            />

            <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ color }) => renderIcon(products, color),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => renderIcon(myprofile, color),
                }}
            />
        </Tab.Navigator>
    );
}