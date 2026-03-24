import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { hp, scaleFont } from "../../constants/layout";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 16,
    },
    contentContainer: {
        paddingBottom: 20,
        paddingTop: 16,
        gap: 16,
    },
    cardWrapper: {
        flex: 1,
        maxWidth: '50%',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        fontSize: 16,
        color: colors.txtColor,
        textAlign: 'center',
    },
    resultHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(12),
        paddingHorizontal: 16
    },

    resultText: {
        fontSize: scaleFont(16),
        color: colors.txtColor,
    },

    resultCount: {
        fontSize: scaleFont(16),
        color: colors.primaryColor, // your primary color
        fontWeight: '600',
    },
});