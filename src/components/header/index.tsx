import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { bell } from '../../assets/svgs';
import { styles } from './styles';
import { IHeaderProps } from './header';
import Typography from '../typography';
import { colors } from '../../theme/colors';

const Header = ({ name, image, onBellPress }: IHeaderProps) => {
    return (
        <View style={styles.container}>

            {/* LEFT SECTION */}
            <View style={styles.left}>
                <Image source={{ uri: image }} style={styles.avatar} />

                <View>
                    <Typography variant="PL">Hello!</Typography>
                    <Typography variant="H5" color={colors.black}>{name}</Typography>
                </View>
            </View>

            {/* RIGHT SECTION */}
            <TouchableOpacity style={styles.bellContainer} onPress={onBellPress}>
                <SvgXml xml={bell} width={20} height={20} />
            </TouchableOpacity>

        </View>
    );
};

export default Header;
