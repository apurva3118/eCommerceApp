import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    Pressable,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { backarrow, closeicon, search, searchicon } from '../../assets/svgs'; // your search icon
import { styles } from './style';
import { ISearchBarProps } from './searchbar';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { AllProucts } from '../../constants/productdata';
const { width } = Dimensions.get('window');

const SearchBar = ({
    showBack = false,
    showClear = false,
    value,
    onChangeText,
    onClearPress,
    editable = true,
    onPress }: ISearchBarProps) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.wrapper} onPress={onPress} disabled={!onPress}>
            {showBack && (<Pressable style={{ paddingLeft: 15 }} onPress={() => navigation.goBack()} >
                <SvgXml xml={backarrow} width={20} height={20} />
            </Pressable>)}
            <View style={styles.container}>

                <SvgXml xml={searchicon} width={20} height={20} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Search here"
                    placeholderTextColor={colors.blackishgray}
                    style={styles.input}
                    pointerEvents={onPress ? "none" : "auto"}
                />
                {showClear && (<Pressable onPress={onClearPress}>
                    <SvgXml xml={closeicon} width={19} height={19} />
                </Pressable>)}
            </View>
        </Pressable>
    );
};

export default SearchBar;