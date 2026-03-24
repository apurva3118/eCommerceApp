import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

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
        color: '#666',
        textAlign: 'center',
    },
});