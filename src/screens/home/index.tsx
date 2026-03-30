import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import SearchBar from '../../components/searchbar';
import OfferCarousel from '../../components/offercarousel';
import ProductCard from '../../components/productcard';
import { ProductData, ProductDataMostPopular } from '../../constants/productdata';
import Typography from '../../components/typography';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/linking';
import { Strings } from '../../constants/strings';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../../store/wishlistSlice';
import { RootState } from '../../store';

const Home = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gapBetween}
      >
        <Header
          name="John William"
          image="https://i.pravatar.cc/150?img=12"
          onBellPress={() => console.log("Bell pressed")}
        />

        <SearchBar
          onPress={() => navigation.navigate('SearchProducts')}
          editable={false} />
        <OfferCarousel />
        <View style={styles.featureRow}>
          <Typography style={styles.featureTitle}>{Strings.featured}</Typography>

          <Pressable onPress={() => navigation.navigate('SeeAll', { type: 'featured' })}>
            <Typography style={styles.seeAll}>{Strings.seeAll}</Typography>
          </Pressable>
        </View>

        <FlatList
          data={ProductData}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.containerStyle}
          renderItem={({ item }) => (
            <Pressable style={styles.containerWidth}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                isWishlisted={wishlist.includes(item.id)}
                onToggleWishlist={() => dispatch(toggleWishlist(item.id))}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    description: item.description,
                  })
                }
              />
            </Pressable>
          )}
        />
        <View style={styles.featureRow}>
          <Typography style={styles.featureTitle}>{Strings.mostPopular}</Typography>

          <Pressable onPress={() => navigation.navigate('SeeAll', { type: 'featured' })}>
            <Typography style={styles.seeAll}>{Strings.seeAll}</Typography>
          </Pressable>
        </View>
        <FlatList
          data={ProductDataMostPopular}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.containerStyle}
          renderItem={({ item }) => (
            <View style={styles.containerWidth}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                isWishlisted={wishlist.includes(item.id)}
                onToggleWishlist={() => dispatch(toggleWishlist(item.id))}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    description: item.description,
                  })
                }
              />
            </View>
          )}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;