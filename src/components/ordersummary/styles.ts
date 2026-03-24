import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardShadow,
        borderRadius: 12,
        padding: 16,
        margin: 16,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        color: colors.black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
    },
    label: {
        fontSize: 14,
        color: colors.darkTxtColor,
    },
    value: {
        fontSize: 14,
        color: colors.black,
    },
    divider: {
        height: 1,
        backgroundColor: colors.txtColor,
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black,
    },
    totalValue: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
    },
});