import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    card: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: colors.cardShadow,
        overflow: "hidden",
    },

    imageContainer: {
        width: "100%",
        aspectRatio: 1.4,
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    heart: {
        position: "absolute",
        top: 8,
        right: 8,
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: 999,
        // backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center",
    },

    content: {
        padding: width * 0.04,
        gap: 4,
    },

    title: {
        fontSize: width * 0.045,
        fontWeight: "600",
        color: colors.black,
    },

    price: {
        fontSize: width * 0.04,
        fontWeight: "bold",
        color: colors.primaryColor,
    },
});