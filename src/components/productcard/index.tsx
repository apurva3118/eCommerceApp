import React from "react";
import {
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { heart, whiteheart } from "../../assets/svgs";
import { styles } from "./styles";
import { IProductCardProps } from "./productcard";
import Typography from "../typography";

const ProductCard = ({ title, price, image, description, onPress, showAddButton = false, isWishlisted, onToggleWishlist, onAddToCart,
  isInCart, onIncreaseQty, onDecreaseQty, quantity
}: IProductCardProps) => {
  console.log("isInCart", isInCart)
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Pressable style={styles.heart} onPress={onToggleWishlist}>
          <SvgXml xml={isWishlisted ? whiteheart : heart} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.price}>{price}</Typography>
        {showAddButton && (
          isInCart ? (
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={(e) => {
                  e.stopPropagation();
                  onDecreaseQty?.();
                }}
              >
                <Image
                  source={require('../../assets/images/minus.png')}
                  style={styles.plusIcon}
                />
              </TouchableOpacity>

              <Typography style={styles.qty}>
                {quantity || 1}
              </Typography>

              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={(e) => {
                  e.stopPropagation();
                  onIncreaseQty?.();
                }}
              >
                <Image
                  source={require('../../assets/images/plus.png')}
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <Pressable
              style={styles.addButton}
              onPress={(e) => {
                e.stopPropagation();
                onAddToCart?.();
              }}
            >
              <Image
                source={require('../../assets/images/plus.png')}
                style={styles.plusIcon}
              />
            </Pressable>
          )
        )}

      </View>

    </Pressable>
  );
};

export default ProductCard;