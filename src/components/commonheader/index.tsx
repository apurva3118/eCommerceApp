import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IHeaderProps } from './commomheader';
import { styles } from './styles'
import Typography from '../typography';
import { SvgXml } from 'react-native-svg';
import { backarrow } from '../../assets/svgs';
const CustomHeader = ({ title }: IHeaderProps) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Pressable onPress={() => navigation.goBack()} style={styles.left}>
                <SvgXml xml={backarrow} />
            </Pressable>
            <Typography style={styles.title}>{title}</Typography>
            <View style={styles.right} />
        </View>
    );
};

export default CustomHeader;
