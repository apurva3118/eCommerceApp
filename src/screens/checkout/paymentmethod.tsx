import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SvgXml } from 'react-native-svg';
import { tickmark, plussmall, } from '../../assets/svgs';
import Typography from '../../components/typography';
import { PAYMENT_OPTIONS } from '../../constants/productdata';

const PaymentMethod = () => {
    const [selected, setSelected] = useState('2');

    return (
        <View style={styles.paymentcontainer}>
            <Text style={styles.heading}>Choose payment method</Text>

            {PAYMENT_OPTIONS.map((item) => {
                const isSelected = selected === item.id;

                return (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.selection}
                        onPress={() => setSelected(item.id)}
                    >
                        <View style={styles.left}>
                            <SvgXml xml={item.icon} />
                            <Typography style={styles.paymenttitle}>{item.title}</Typography>
                        </View>
                        <View style={styles.radioOuter}>
                            {isSelected && <SvgXml xml={tickmark} />}
                        </View>
                    </TouchableOpacity>
                );
            })}
            <TouchableOpacity style={styles.paymentrow}>
                <Typography style={styles.addText}>Add new payment method</Typography>

                <View style={styles.addBtn}>
                    <SvgXml xml={plussmall} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentMethod;