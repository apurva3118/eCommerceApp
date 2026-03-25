import React from 'react';
import { View, ScrollView, Image } from 'react-native';
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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { AllProucts } from "../../constants/productdata";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../../store/cartSlice";
import Typography from '../../components/typography';

const MyCart = () => {
  const dispatch = useDispatch();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartProducts = cart.map((cartItem) => {
    const product = AllProucts.find((p) => p.id === cartItem.id);
    return product
      ? { ...product, quantity: cartItem.quantity }
      : null;
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title='Cart' showdots={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzChvQ6zMMO6HMf9shw8Ow4SJTrugCdcj26Q&s' }}
              style={styles.emptyImage}
            />
            <Typography style={styles.emptyText}>
              Your cart is empty
            </Typography>
          </View>
        ) : (
          <>
            {cartProducts.map(
              (item) =>
                item && (
                  <CartItem
                    key={item.id}
                    item={item}
                    quantity={item.quantity}
                    onIncreaseQty={() => dispatch(increaseQty(item.id))}
                    onDecreaseQty={() => dispatch(decreaseQty(item.id))}
                    onRemove={() => dispatch(removeFromCart(item.id))}
                  />
                )
            )}

            <OrderSummary
              items={cart.length}
              subtotal={423}
              discount={4}
              deliveryCharges={2}
            />

            <View style={styles.bottomBar}>
              <ButtonPrimary
                title={Strings.checkout}
                style={styles.btnStyle}
                onPress={() => navigation.navigate('Checkout')}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default MyCart;
