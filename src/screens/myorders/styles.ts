import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { wp, hp, scaleFont, moderateScale } from '../../constants/layout';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },

    tabButton: {
        alignItems: 'center',
    },

    tabText: {
        fontSize: scaleFont(16),
        fontWeight: '600',
        color: colors.black
    },

    activeTabText: {
        color: colors.primaryColor,
        fontWeight: '600',
    },

    activeIndicator: {
        marginTop: 4,
        height: 2,
        width: wp(50),
        backgroundColor: colors.primaryColor,
        borderRadius: 2,
    },
});