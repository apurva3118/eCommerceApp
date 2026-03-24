import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ICartItemProps } from './cartitem';
import { SvgXml } from 'react-native-svg';
import { deleteicon } from '../../assets/svgs';
import Typography from '../typography';
import ButtonPrimary from '../buttonprimary';
import { Strings } from '../../constants/strings';

const CartItem = ({ item, showtrack = false }: ICartItemProps) => {
    return (
        <View style={styles.container}>
            {!showtrack && (<TouchableOpacity style={styles.deleteBtn}>
                <SvgXml xml={deleteicon} />
            </TouchableOpacity>)}
            <View style={styles.leftSection}>
                <Image source={item.image} style={styles.image} />

                <View style={styles.details}>
                    <Typography style={styles.title}>{item.title}</Typography>
                    <Typography style={styles.brand}>{item.brand}</Typography>
                    <Typography style={styles.price}>{item.price}</Typography>
                </View>
            </View>
            {showtrack ?
                <View style={styles.actions}>
                    <ButtonPrimary
                        title={Strings.trackorder}
                        style={styles.btnStyle}
                        onPress={() => {
                        }}
                    />

                </View>
                : <View style={styles.actions}>
                    <TouchableOpacity style={styles.qtyBtn}>
                        <Image source={require('../../assets/images/minus.png')} style={styles.plusIcon} />
                    </TouchableOpacity>

                    <Typography style={styles.qty}>03</Typography>

                    <TouchableOpacity style={styles.qtyBtn}>
                        <Image source={require('../../assets/images/plus.png')} style={styles.plusIcon} />
                    </TouchableOpacity>
                </View>}
        </View>
    );
};

export default CartItem;