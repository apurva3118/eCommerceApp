import React, { useRef, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    ListRenderItem,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import { styles } from './styles';
import { IOfferItem } from "./offercarousel";
import Typography from "../typography";
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const SPACING = width * 0.04;
const DATA: IOfferItem[] = [
    {
        id: "1",
        title: "Get Winter Discount",
        discount: "20% Off",
        subtitle: "For Children",
        image: require('../../assets/images/kid.png')
    },
    {
        id: "2",
        title: "Winter Sale",
        discount: "15% Off",
        subtitle: "For men",
        image: require('../../assets/images/kid.png')
    },

];


const OfferCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const renderItem: ListRenderItem<IOfferItem> = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Typography variant="H3" style={styles.title}>{item.title}</Typography>
                    <Typography variant="H1" style={styles.discount}>{item.discount}</Typography>
                    <Typography variant="P2" style={styles.subtitle}>{item.subtitle}</Typography>
                </View>

                <Image source={item.image}  style={styles.image} />
            </View>
        );
    };

    const onScroll = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / (CARD_WIDTH + SPACING)
        );
        setActiveIndex(index);
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                ref={flatListRef}
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                pagingEnabled={false}
                snapToInterval={CARD_WIDTH + SPACING}
                decelerationRate="fast"
                onScroll={onScroll}
                contentContainerStyle={styles.content}
                ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
            />

            {/* Dots */}
            <View style={styles.dotsContainer}>
                {DATA.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default OfferCarousel;
