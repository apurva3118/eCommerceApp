import React from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IHeaderProps } from './commomheader';
import { styles } from './styles'
import Typography from '../typography';
import { SvgXml } from 'react-native-svg';
import { backarrow, dots } from '../../assets/svgs';

const CustomHeader = ({ title, showdots = false }: IHeaderProps) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Pressable onPress={() => navigation.goBack()} style={styles.left}>
                <SvgXml xml={backarrow} height={24} width={24} />
            </Pressable>
            <Typography style={styles.title}>{title}</Typography>
            {showdots && (<Pressable style={styles.right}>
                <SvgXml xml={dots} height={24} width={24} />
            </Pressable>)}
        </View>
    );
};

export default CustomHeader;
