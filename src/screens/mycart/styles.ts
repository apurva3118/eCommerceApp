import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { moderateScale, wp } from "../../constants/layout";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
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