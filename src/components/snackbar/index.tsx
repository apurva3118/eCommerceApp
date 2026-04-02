import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { hideSnackBar } from '../../store/snackbarSlice';
import { styles } from './styles';
import { colors } from '../../theme/colors';

const Snackbar = () => {
    const dispatch = useDispatch();
    const { snackbar } = useSelector((state: RootState) => state.snackbar);

    const translateY = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        if (snackbar.visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            const timer = setTimeout(() => {
                hideSnackbar();
            }, snackbar.duration);

            return () => clearTimeout(timer);
        }
    }, [snackbar.visible]);

    const hideSnackbar = () => {
        Animated.timing(translateY, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            dispatch(hideSnackBar());
        });
    };

    if (!snackbar.visible) return null;

    return (
        <Animated.View
            style={[
                styles.container,
                snackbar.position === 'top' ? styles.top : styles.bottom,
                { transform: [{ translateY }] },
                getVariantStyle(snackbar.variant),
            ]}
        >
            <Text style={styles.text}>{snackbar.message}</Text>
        </Animated.View>
    );
};

const getVariantStyle = (variant: string) => {
    switch (variant) {
        case 'success':
            return { backgroundColor: colors.primaryColor };
        case 'error':
            return { backgroundColor: '#F44336' };
        case 'warning':
            return { backgroundColor: '#FF9800' };
        case 'info':
            return { backgroundColor: '#2196F3' };
        default:
            return { backgroundColor: '#333' };
    }
};

export default Snackbar;