import React from 'react';
import {
    View,
    Image,
    Pressable,
    ScrollView,
    Dimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/linking';
import { SvgXml } from 'react-native-svg';
import { heart, backarrow, star } from '../../assets/svgs';
import Typography from '../../components/typography';
import { colors } from '../../theme/colors';
import { styles } from './styles';

type ProductRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const ProductDetails = () => {
    const navigation = useNavigation();
    const route = useRoute<ProductRouteProp>();
    const insets = useSafeAreaInsets();

    const { title, image, price, description } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.imageWrapper}>
                    <Image source={image} style={styles.image} />

                    <Pressable
                        style={[styles.backBtn, { top: insets.top + 10 }]}
                        onPress={() => navigation.goBack()}
                    >
                        <SvgXml xml={backarrow} />
                    </Pressable>

                    <Pressable style={[styles.heartBtn, { top: insets.top + 10 }]}>
                        <SvgXml xml={heart} />
                    </Pressable>
                </View>
                <SafeAreaView edges={['bottom']}>
                    <View style={styles.content}>
                        <View style={styles.rowBetween}>
                            <Typography style={styles.title}>{title}</Typography>
                            <Typography style={styles.price}>{price}</Typography>
                        </View>
                        <View style={styles.ratingRow}>
                            <SvgXml xml={star} />
                            <Typography style={styles.ratingText}>4.5</Typography>
                            <Typography style={styles.reviewText}>
                                (20 Review)
                            </Typography>
                        </View>
                        <Typography style={styles.sectionTitle}>
                            Description
                        </Typography>
                        <Typography style={styles.description}>
                            {description ||
                                'Culpa aliquam consequatur veritatis at consequuntur praesentium beatae temporibus nobis...'}
                        </Typography>

                        <Typography style={styles.sectionTitle}>Size</Typography>
                        <View style={styles.sizeRow}>
                            {['8', '10', '38', '40'].map((size, index) => (
                                <Pressable key={index} style={styles.sizeBox}>
                                    <Typography style={styles.sizeText}>{size}</Typography>
                                </Pressable>
                            ))}
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

export default ProductDetails;