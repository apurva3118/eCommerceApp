import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 16,
        right: 16,
        padding: 14,
        borderRadius: 10,
        zIndex: 999,
        elevation: 5,
    },
    bottom: {
        bottom: 20,
    },
    top: {
        top: 50,
    },
    text: {
        color: colors.white,
        fontSize: 14,
    },
});