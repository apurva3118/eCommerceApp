import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Typography from '../typography';

interface OrderSummaryProps {
    items: number;
    subtotal: number;
    discount: number;
    deliveryCharges: number;
}

const OrderSummary = ({
    items,
    subtotal,
    discount,
    deliveryCharges,
}: OrderSummaryProps) => {
    const total = subtotal - discount + deliveryCharges;

    return (
        <View style={styles.container}>
            <Typography style={styles.heading}>Order Summary</Typography>

            <View style={styles.row}>
                <Typography style={styles.label}>Items</Typography>
                <Typography style={styles.value}>{items}</Typography>
            </View>

            <View style={styles.row}>
                <Typography style={styles.label}>Subtotal</Typography>
                <Typography style={styles.value}>${subtotal}</Typography>
            </View>

            <View style={styles.row}>
                <Typography style={styles.label}>Discount</Typography>
                <Typography style={styles.value}>${discount}</Typography>
            </View>

            <View style={styles.row}>
                <Typography style={styles.label}>Delivery Charges</Typography>
                <Typography style={styles.value}>${deliveryCharges}</Typography>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
                <Typography style={styles.totalLabel}>Total</Typography>
                <Typography style={styles.totalValue}>${total}</Typography>
            </View>
        </View>
    );
};

export default OrderSummary;