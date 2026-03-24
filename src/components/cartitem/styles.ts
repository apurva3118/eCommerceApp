import { StyleSheet } from 'react-native';
import { wp, hp, scaleFont, moderateScale } from '../../constants/layout';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: wp(12),
        marginVertical: hp(6),
        marginHorizontal: wp(16),
        backgroundColor: colors.cardShadow,
        borderRadius: wp(16),
        justifyContent: 'space-between',
    },

    image: {
        width: wp(100),
        height: wp(80),
        borderRadius: wp(12),
    },

    details: {
        marginLeft: wp(12),
        justifyContent: 'space-between',
        height: hp(70),
    },

    title: {
        fontSize: scaleFont(16),
        fontWeight: '600',
        color: colors.black,
    },

    brand: {
        fontSize: scaleFont(12),
        color: colors.txtColor,
        marginVertical: hp(2),
    },

    price: {
        fontSize: scaleFont(14),
        color: colors.primaryColor,
        fontWeight: '600',
    },

    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
    },

    qtyBtn: {
        width: wp(32),
        height: wp(32),
        borderRadius: wp(16),
        justifyContent: 'center',
        alignItems: 'center',
    },

    qty: {
        marginHorizontal: wp(10),
        fontSize: scaleFont(14),
        fontWeight: '500',
    },

    plusIcon: {
        width: 24,
        height: 24,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    deleteBtn: {
        position: 'absolute',
        top: hp(10),
        right: wp(19),
        zIndex: 10,
    },
    btnStyle: {
        width: wp(120),
        height: hp(35)
    },
});