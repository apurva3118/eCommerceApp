import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/searchproducts';
import ProfileScreen from '../screens/myprofile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import {
    home,
    myprofile,
    products,
    search,
} from '../assets/svgs';
import MyCart from '../screens/mycart';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const insets = useSafeAreaInsets();
    const renderIcon = (xml: string, color: string) => {
        let updatedXml = xml
            .replace(/fill="[^"]*"/g, `fill="${color}"`)
            .replace(/stroke="[^"]*"/g, `stroke="${color}"`);

        return <SvgXml xml={updatedXml} width={24} height={24} />;
    };
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primaryColor,
                tabBarInactiveTintColor: colors.greyBagColor,
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: colors.white
                },
                tabBarItemStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarIconStyle: {
                    marginTop: 6,
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
                name="My Cart"
                component={MyCart}
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