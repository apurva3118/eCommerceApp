import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CartItem from '../CartItem';

jest.mock('react-native-svg', () => ({
    SvgXml: () => null,
}));

jest.mock('../../assets/svgs', () => ({
    deleteicon: '<svg></svg>',
}));

jest.mock('../../constants/strings', () => ({
    Strings: {
        trackorder: 'Track Order',
    },
}));

describe('CartItem Component', () => {
    const mockItem = {
        id: '1',
        title: 'Test Product',
        brand: 'Test Brand',
        price: '$100',
        image: { uri: 'test-image' },
        quantity: 2,
    };

    const mockIncrease = jest.fn();
    const mockDecrease = jest.fn();
    const mockRemove = jest.fn();

    const defaultProps = {
        item: mockItem,
        quantity: mockItem.quantity,
        onIncreaseQty: mockIncrease,
        onDecreaseQty: mockDecrease,
        onRemove: mockRemove,
        showtrack: false,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders item details correctly', () => {
        const { getByText } = render(<CartItem {...defaultProps} />);

        expect(getByText('Test Product')).toBeTruthy();
        expect(getByText('Test Brand')).toBeTruthy();
        expect(getByText('$100')).toBeTruthy();
        expect(getByText('2')).toBeTruthy();
    });

    it('calls onIncreaseQty when plus button is pressed', () => {
        const { getByTestId } = render(<CartItem {...defaultProps} />);

        fireEvent.press(getByTestId('increase-btn'));
        expect(mockIncrease).toHaveBeenCalled();
    });

    it('calls onDecreaseQty when minus button is pressed', () => {
        const { getByTestId } = render(<CartItem {...defaultProps} />);

        fireEvent.press(getByTestId('decrease-btn'));
        expect(mockDecrease).toHaveBeenCalled();
    });

    it('calls onRemove when delete button is pressed', () => {
        const { getByTestId } = render(<CartItem {...defaultProps} />);

        fireEvent.press(getByTestId('delete-btn'));
        expect(mockRemove).toHaveBeenCalled();
    });
});