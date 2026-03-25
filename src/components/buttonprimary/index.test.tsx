import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonPrimary from '../ButtonPrimary';

describe('ButtonPrimary', () => {
    const mockPress = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with title', () => {
        const { getByText } = render(
            <ButtonPrimary title="Click Me" onPress={mockPress} />
        );

        expect(getByText('Click Me')).toBeTruthy();
    });
    it('calls onPress when pressed', () => {
        const { getByTestId } = render(
            <ButtonPrimary title="Click Me" onPress={mockPress} />
        );

        fireEvent.press(getByTestId('primary-button'));

        expect(mockPress).toHaveBeenCalled();
    });
});
