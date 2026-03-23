import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: colors.white,
        justifyContent: 'center',
        position: 'relative', 
    },

    left: {
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:colors.cardShadow,
        position: 'absolute',
        left: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 1,
        alignItems:'center'
    },

    back: {
        fontSize: 22,
        fontWeight: '600',
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: colors.black,
        position: 'absolute',
        left: 0,
        right: 0,
    },

    right: {
        position: 'absolute',
        right: 16,
        width: 24,
        height: '100%',
    },
});