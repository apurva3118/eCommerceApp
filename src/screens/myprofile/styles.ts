import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },

    topSection: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
    },

    header: {
        alignItems: 'center',
        paddingBottom: height * 0.025,
    },

    avatar: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: (width * 0.25) / 2,
    },

    name: {
        fontSize: width * 0.06,
        fontWeight: '600',
        paddingTop: 8,
    },

    email: {
        fontSize: width * 0.035,
        color: 'gray',
        paddingTop: 4,
    },

    menuContainer: {
        paddingTop: height * 0.01,
        gap: height * 0.015,
    },

    menuItem: {
        backgroundColor: '#EDEDED',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.04,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    menuText: {
        fontSize: width * 0.04,
        fontWeight: '500',
    },

    bottomSection: {
        paddingBottom: height * 0.03,
        alignItems: 'center',
    },

    signOutText: {
        color: 'orange',
        fontSize: width * 0.045,
        fontWeight: '600',
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});