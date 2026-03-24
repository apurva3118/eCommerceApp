import React from "react";
import {
  View,
  Image,
  Pressable,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { heart } from "../../assets/svgs";
import { styles } from "./styles";
import { IProductCardProps } from "./productcard";
import Typography from "../typography";

const ProductCard = ({ title, price, image, description, onPress, showAddButton = false }: IProductCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.heart}>
          <SvgXml xml={heart} />
        </View>
      </View>
      <View style={styles.content}>
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.price}>{price}</Typography>
        {showAddButton && (
          <Pressable style={styles.addButton}>
            <Image source={require('../../assets/images/plus.png')} style={styles.plusIcon} />
          </Pressable>
        )}
      </View>

    </Pressable>
  );
};

export default ProductCard;