import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../../components/productcard';
import { AllProucts } from '../../constants/productdata';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';
import SearchBar from '../../components/searchbar';
import Typography from '../../components/typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleWishlist } from '../../store/wishlistSlice';
import { addToCart, increaseQty, decreaseQty } from '../../store/cartSlice';

const SearchProducts = () => {
  const [search, setSearch] = useState('');
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const getCartItem = (id: string) =>
    cartItems.find((item) => item.id === id);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  const filteredProducts =
    search.trim().length === 0
      ? []
      : AllProucts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

  const handleProductPress = (product: any) => {
    navigation.navigate('ProductDetails', {
      id: product.id,
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
          isWishlisted={wishlist.includes(item.id)}
          isInCart={!!cartItem}
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
      <SearchBar
        showClear={true}
        showBack={true}
        value={search}
        onChangeText={setSearch}
        onClearPress={() => setSearch('')}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          search.trim().length > 0 ? (
            <View style={styles.resultHeader}>
              <Typography style={styles.resultText}>
                Results for "{search}"
              </Typography>

              <Typography style={styles.resultCount}>
                {filteredProducts.length} Results Found
              </Typography>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Typography style={styles.emptyText}>No products found</Typography>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SearchProducts;

