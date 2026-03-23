import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../../components/productcard';
import { AllProucts, ProductData } from '../../constants/productdata';

const SeeAllScreen = () => {
  const handleProductPress = (product: any) => {
    // Navigate to product details
    console.log('Product pressed:', product);
    // navigation.navigate('ProductDetails', { productId: product.id });
  };

  const renderProductCard = ({ item }: { item: any }) => {
    return (
      <View style={styles.cardWrapper}>
        <ProductCard
          title={item.title}
          price={item.price}
          image={item.image}
          onPress={() => handleProductPress(item)}
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
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SeeAllScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 16,
  },
  contentContainer: {
    paddingBottom: 20,
    paddingTop: 16,
    gap: 16,
  },
  cardWrapper: {
    flex: 1,
    maxWidth: '50%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});