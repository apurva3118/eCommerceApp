import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');
const scale = width / 375;
const normalize = (size: number) => Math.round(size * scale);

export const styles = StyleSheet.create({
    imageWrapper: {
        width: '100%',
        height: height * 0.45,
    },
    image: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    backBtn: {
        position: 'absolute',
        left: 20,
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 30,
    },
    heartBtn: {
        position: 'absolute',
        right: 20,
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 30,
    },
    content: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: normalize(20),
        fontWeight: '700',
    },
    price: {
        fontSize: normalize(18),
        fontWeight: '700',
        color: colors.primaryColor,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 6,
    },
    ratingText: {
        fontSize: normalize(14),
        fontWeight: '600',
    },
    reviewText: {
        fontSize: normalize(14),
        color: colors.gray,
    },
    sectionTitle: {
        marginTop: height * 0.02,
        fontSize: normalize(16),
        fontWeight: '700',
    },
    description: {
        marginTop: 10,
        fontSize: normalize(14),
        color: colors.txtColor,
        lineHeight: normalize(20),
    },
    sizeRow: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
    },
    sizeBox: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        paddingVertical: height * 0.012,
        paddingHorizontal: width * 0.04,
        borderRadius: 10,
    },
    sizeText: {
        fontSize: normalize(14),
        fontWeight: '600',
    },
});