import React from 'react';
import { View, FlatList } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../../components/productcard';
import { AllProucts } from '../../constants/productdata';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';
import Typography from '../../components/typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleWishlist } from '../../store/wishlistSlice';
import { addToCart, increaseQty, decreaseQty } from '../../store/cartSlice';
import { State } from 'react-native-gesture-handler';

const SeeAllScreen = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const cartItems = useSelector((State: RootState) => State.cart.items);
  const getCartItem = (id: string) =>
    cartItems.find((item) => item.id === id);
  const dispatch = useDispatch();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const handleProductPress = (product: any) => {
    navigation.navigate('ProductDetails', {
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    })
  };

  const renderProductCard = ({ item }: { item: any }) => {
    const cartItem = getCartItem(item.id);
    return (
      <View style={styles.cardWrapper}>
        <ProductCard
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          onPress={() => handleProductPress(item)}
          showAddButton={true}
          isInCart={!!cartItem}
          isWishlisted={wishlist.includes(item.id)}
          onToggleWishlist={() => dispatch(toggleWishlist(item.id))}
          onAddToCart={() => dispatch(addToCart(item.id))}
          quantity={cartItem?.quantity}
          onIncreaseQty={() => dispatch(increaseQty(item.id))}
          onDecreaseQty={() => dispatch(decreaseQty(item.id))}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title='Products' />
      <FlatList
        data={AllProucts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Typography style={styles.emptyText}>No products found</Typography>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SeeAllScreen;

