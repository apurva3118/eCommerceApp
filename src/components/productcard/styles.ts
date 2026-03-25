import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { scaleFont, wp } from "../../constants/layout";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
    card: {
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
    addButton: {
        position: "absolute",
        right: 10,
        bottom: 10,
        borderRadius: 20,
        padding: 8,
    },

    plusIcon: {
        width: 24,
        height: 24,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        position: "absolute",
        right: 10,
        bottom: 10,
        borderRadius: 20,
    },

    qtyBtn: {
        width: wp(32),
        height: wp(32),
        borderRadius: wp(16),
        justifyContent: 'center',
        alignItems: 'center',
    },

    qty: {
        marginHorizontal: wp(10),
        fontSize: scaleFont(14),
        fontWeight: '500',
    },

});