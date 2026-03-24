import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
const { width, height } = Dimensions.get('window');
const BAR_HEIGHT = width * 0.12;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: BAR_HEIGHT,
        backgroundColor: colors.cardShadow,
        borderRadius: BAR_HEIGHT / 2,
        paddingHorizontal: 16,
        marginHorizontal: width * 0.05,
        gap: 10,
    },
    input: {
        flex: 1,
        fontSize: width * 0.04,
        color: colors.black,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },

});