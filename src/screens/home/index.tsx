import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
const Home = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Header
          name="John William"
          image="https://i.pravatar.cc/150?img=12"
          onBellPress={() => console.log("Bell pressed")}
        />

        <SearchBar />
        <OfferCarousel />

        {/* Featured */}
        <View style={styles.featureRow}>
          <Typography style={styles.featureTitle}>Featured</Typography>

          <Pressable onPress={() => navigation.navigate('SeeAll', { type: 'featured' })}>
            <Typography style={styles.seeAll}>See All</Typography>
          </Pressable>
        </View>

        <FlatList
          data={ProductData}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 16,
            gap: 12,
          }}
          renderItem={({ item }) => (
            <View style={{ width: 160 }}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </View>
          )}
        />

        {/* Most Popular */}
        <View style={styles.featureRow}>
          <Typography style={styles.featureTitle}>Most Popular</Typography>

          <Pressable onPress={() => console.log('See All pressed')}>
            <Typography style={styles.seeAll}>See All</Typography>
          </Pressable>
        </View>
        <FlatList
          data={ProductDataMostPopular}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 16,
            gap: 12,
          }}
          renderItem={({ item }) => (
            <View style={{ width: 160 }}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </View>
          )}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;