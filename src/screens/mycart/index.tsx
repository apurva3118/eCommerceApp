import React from 'react';
import { View, ScrollView } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { ProductData } from '../../constants/productdata';
import CartItem from '../../components/cartitem';
import OrderSummary from '../../components/ordersummary';
import ButtonPrimary from '../../components/buttonprimary';
import { Strings } from '../../constants/strings';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';
import { useNavigation } from '@react-navigation/native';

const MyCart = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title='Cart' showdots={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {ProductData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <OrderSummary
          items={ProductData.length}
          subtotal={423}
          discount={4}
          deliveryCharges={2}
        />
        <View style={styles.bottomBar}>
          <ButtonPrimary
            title={Strings.checkout}
            style={styles.btnStyle}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default MyCart;
