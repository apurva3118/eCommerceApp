import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.black,
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.cardShadow,
        padding: 14,
        borderRadius: 12,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black,
    },
    email: {
        fontSize: 13,
        color: colors.txtColor,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#e5e5e5',
        marginTop: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.cardShadow,
        padding: 16,
        borderRadius: 12,
    },

    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    icon: {
        fontSize: 18,
        marginRight: 12,
    },

    settingText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.black,
    },

    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    rightText: {
        fontSize: 14,
        color: colors.txtColor,
    },
});