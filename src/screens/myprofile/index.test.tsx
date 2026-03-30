import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyProfile from '../MyProfile';
import { Text } from 'react-native';

beforeEach(() => {
    jest.clearAllMocks();
});
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

jest.mock('react-native-safe-area-context', () => {
    const React = require('react');
    const { View } = require('react-native');
    return {
        SafeAreaView: ({ children }: any) => <View>{children}</View>,
    };
});

jest.mock('react-native-svg', () => ({
    SvgXml: () => null,
}));

jest.mock('../../components/typography', () => {
    const React = require('react');
    const { Text } = require('react-native');

    return (props: any) => <Text {...props}>{props.children}</Text>;
});

it('renders user profile info', () => {
    const { getByText } = render(<MyProfile />);

    expect(getByText('Mark Adam')).toBeTruthy();
    expect(getByText('Sunny_Koelpin45@hotmail.com')).toBeTruthy();
});

it('renders all menu items', () => {
    const { getByText } = render(<MyProfile />);

    expect(getByText('Profile')).toBeTruthy();
    expect(getByText('Setting')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
    expect(getByText('Share App')).toBeTruthy();
    expect(getByText('Help')).toBeTruthy();
    expect(getByText('My Orders')).toBeTruthy();
});

it('navigates to Settings when Setting is pressed', () => {
    const { getByText } = render(<MyProfile />);

    fireEvent.press(getByText('Setting'));

    expect(mockNavigate).toHaveBeenCalledWith('Settings');
});

it('navigates to Settings when Setting is pressed', () => {
    const { getByText } = render(<MyProfile />);

    fireEvent.press(getByText('Setting'));

    expect(mockNavigate).toHaveBeenCalledWith('Settings');
});

it('navigates to Orders when My Orders is pressed', () => {
    const { getByText } = render(<MyProfile />);

    fireEvent.press(getByText('My Orders'));

    expect(mockNavigate).toHaveBeenCalledWith('Orders');
});

it('does not navigate for other menu items', () => {
    const { getByText } = render(<MyProfile />);

    fireEvent.press(getByText('Profile'));
    fireEvent.press(getByText('Contact'));

    expect(mockNavigate).not.toHaveBeenCalledWith('Settings');
    expect(mockNavigate).not.toHaveBeenCalledWith('Orders');
});

it('renders Sign Out button', () => {
    const { getByText } = render(<MyProfile />);

    expect(getByText('Sign Out')).toBeTruthy();
});