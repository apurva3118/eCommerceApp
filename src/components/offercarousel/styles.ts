import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.9;
const SPACING = width * 0.04;
export const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
    },

    content: {
        paddingHorizontal: width * 0.05,
    },

    card: {
        width: CARD_WIDTH,
        aspectRatio: 2.5,
        borderRadius: 10,
        backgroundColor: colors.primaryColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: width * 0.04,
    },

    textContainer: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        color: colors.white,
        fontSize: width * 0.045,
    },

    discount: {
        color: colors.white,
        fontSize: width * 0.065,
        fontWeight: "bold",
    },

    subtitle: {
        color: colors.white,
        fontSize: width * 0.045,
    },

    image: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: "contain",
    },

    dotsContainer: {
        gap: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10, // 👈 spacing without margin
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
    },

    activeDot: {
        backgroundColor: colors.primaryColor,
        width: 10,
        height: 10,
    },
});