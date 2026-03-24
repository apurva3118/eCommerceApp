import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    topSection: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
    },

    header: {
        alignItems: 'center',
        paddingBottom: height * 0.025,
    },

    avatar: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: (width * 0.25) / 2,
    },

    name: {
        fontSize: width * 0.06,
        fontWeight: '600',
        paddingTop: 8,
    },

    email: {
        fontSize: width * 0.035,
        color: colors.txtColor,
        paddingTop: 4,
    },

    menuContainer: {
        paddingTop: height * 0.01,
        gap: height * 0.015,
    },

    menuItem: {
        backgroundColor: colors.cardShadow,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.04,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    menuText: {
        fontSize: width * 0.04,
        fontWeight: '500',
    },

    bottomSection: {
        paddingBottom: height * 0.01,
        alignItems: 'center',
    },

    signOutText: {
        color: colors.orange,
        fontSize: width * 0.045,
        fontWeight: '600',
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});