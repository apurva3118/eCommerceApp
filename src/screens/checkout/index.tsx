import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Typography from '../../components/typography';
import OrderSummary from '../../components/ordersummary';
import { ProductData } from '../../constants/productdata';
import PaymentMethod from './paymentmethod';
import ButtonPrimary from '../../components/buttonprimary';
import { Strings } from '../../constants/strings';

const Checkout = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader title='Checkout' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/images/location.png')} />
                        </View>

                        <View>
                            <Typography style={styles.title}>
                                325 15th Eighth Avenue, New York
                            </Typography>
                            <Typography style={styles.subtitle}>
                                Saepe eaque fugiat ea voluptatum veniam.
                            </Typography>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/images/timer.png')} />
                        </View>

                        <Typography style={styles.title}>
                            6:00 pm, Wednesday 20
                        </Typography>
                    </View>
                </View>
                <OrderSummary
                    items={ProductData.length}
                    subtotal={423}
                    discount={4}
                    deliveryCharges={2}
                />
                <PaymentMethod />
                <View style={styles.bottomBar}>
                    <ButtonPrimary
                        title={Strings.checkout}
                        style={styles.btnStyle}
                        onPress={() => {

                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Checkout;