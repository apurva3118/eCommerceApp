import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import CustomHeader from '../../components/commonheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../../components/productcard';
import { AllProucts } from '../../constants/productdata';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';
import SearchBar from '../../components/searchbar';

const SearchProducts = () => {
  const [search, setSearch] = useState('');
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
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    })
  };

  const renderProductCard = ({ item }: { item: any }) => {
    return (
      <View style={styles.cardWrapper}>
        <ProductCard
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          onPress={() => handleProductPress(item)}
          showAddButton={true}
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
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SearchProducts;

