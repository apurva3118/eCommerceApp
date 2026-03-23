import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { search, searchicon } from '../../assets/svgs'; // your search icon
import { styles } from './style';
const { width } = Dimensions.get('window');

const SearchBar = () => {
    return (
        <View style={styles.container}>

            {/* Icon */}
            <SvgXml xml={searchicon} width={20} height={20} />

            {/* Input */}
            <TextInput
                placeholder="Search here"
                placeholderTextColor="#999"
                style={styles.input}
            />

        </View>
    );
};

export default SearchBar;