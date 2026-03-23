import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { heart } from "../../assets/svgs";
import { styles } from "./styles";
import { IProductCardProps } from "./productcard";
import Typography from "../typography";

const ProductCard = ({ title, price, image, description, onPress }: IProductCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.heart}>
          <SvgXml xml={heart} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.price}>{price}</Typography>
      </View>

    </Pressable>
  );
};

export default ProductCard;