import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { wp, hp, scaleFont, moderateScale } from '../../constants/layout';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        paddingHorizontal: wp(16),
        paddingVertical: hp(16),
        borderRadius: wp(16),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(16),

    },
    iconContainer: {
        width: wp(45),
        height: wp(45),
        borderRadius: wp(22.5),
        backgroundColor: colors.cardShadow,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(12),
    },
    title: {
        fontSize: scaleFont(14),
        fontWeight: '600',
        color: colors.black,
    },
    subtitle: {
        fontSize: scaleFont(12),
        color: colors.darkTxtColor,
        marginTop: hp(4),
    },
    paymentcontainer: {
        paddingHorizontal: wp(16),
        paddingVertical: hp(16),
    },

    heading: {
        fontSize: scaleFont(18),
        fontWeight: '600',
        color: colors.black,
        marginBottom: hp(16),
    },

    paymentrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(18),
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(12),
    },

    paymenttitle: {
        fontSize: scaleFont(16),
        color: colors.black,
    },

    radioOuter: {
        width: wp(24),
        height: wp(24),
        borderRadius: wp(12),
        backgroundColor: colors.cardShadow,
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioInner: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5),
        backgroundColor: colors.primaryColor,
    },

    addText: {
        fontSize: scaleFont(16),
        color: colors.black,
    },

    addBtn: {
        width: wp(24),
        height: wp(24),
        borderRadius: wp(12),
        backgroundColor: colors.cardShadow,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(16),
        justifyContent: 'space-between'
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: moderateScale(16),
        borderTopWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    btnStyle: {
        width: wp(350)
    },
});