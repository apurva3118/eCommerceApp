import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../Home';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { toggleWishlist } from '../../store/wishlistSlice';

const mockNavigate = jest.fn();
const mockedUseSelector = jest.mocked(useSelector);
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(),
}));

jest.mock('../../components/header', () => () => null);
jest.mock('../../components/searchbar', () => {
    const React = require('react');
    const { Text } = require('react-native');

    return (props: any) => (
        <Text onPress={props.onPress}>SearchBar</Text>
    );
});
jest.mock('../../components/offercarousel', () => () => null);
jest.mock('../../components/productcard', () => {
    const React = require('react');
    const { Text, View } = require('react-native');

    return (props: any) => (
        <View>
            <Text onPress={props.onPress}>{props.title}</Text>
            <Text onPress={props.onToggleWishlist}>wishlist</Text>
        </View>
    );
});
jest.mock('../../components/typography', () => {
    const React = require('react');
    const { Text } = require('react-native');

    return (props: any) => (
        <Text {...props}>{props.children}</Text>
    );
});
jest.mock('../../constants/productdata', () => ({
    ProductData: [
        {
            id: '1',
            title: 'Product 1',
            price: 100,
            image: 'img1',
            description: 'desc1',
        },
    ],
    ProductDataMostPopular: [
        {
            id: '2',
            title: 'Product 2',
            price: 200,
            image: 'img2',
            description: 'desc2',
        },
    ],
}));
it('renders Home screen correctly', () => {
    (mockedUseSelector).mockReturnValue([]);

    const { getByText } = render(<Home />);

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
});
it('navigates to SearchProducts on SearchBar press', () => {
    (mockedUseSelector).mockReturnValue([]);

    const { getByText } = render(<Home />);

    fireEvent.press(getByText('SearchBar'));

    expect(mockNavigate).toHaveBeenCalledWith('SearchProducts');
});
it('navigates to ProductDetails on product press', () => {
    (mockedUseSelector).mockReturnValue([]);

    const { getByText } = render(<Home />);

    fireEvent.press(getByText('Product 1'));

    expect(mockNavigate).toHaveBeenCalledWith('ProductDetails', {
        id: '1',
        title: 'Product 1',
        image: 'img1',
        price: 100,
        description: 'desc1',
    });
});
it('dispatches toggleWishlist when triggered', () => {
    (mockedUseSelector).mockReturnValue([]);

    const { getAllByText } = render(<Home />);

    fireEvent.press(getAllByText('wishlist')[0]);

    expect(mockDispatch).toHaveBeenCalledWith(toggleWishlist('1'));
});
it('navigates to SeeAll screen', () => {
    (mockedUseSelector).mockReturnValue([]);

    const { getAllByText } = render(<Home />);

    fireEvent.press(getAllByText('See All')[0]);

    expect(mockNavigate).toHaveBeenCalledWith('SeeAll', {
        type: 'featured',
    });
});