import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../../components/productcard';
import { AllProucts } from '../../constants/productdata';
import { styles } from './styles'

const SeeAllScreen = () => {
  const handleProductPress = (product: any) => {
    console.log('Product pressed:', product);
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

