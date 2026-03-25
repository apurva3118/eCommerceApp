export type IProductCardProps = {
    title: string;
    price: string;
    image: ImageSourcePropType;
    description: string,
    onPress?: () => void;
    showAddButton?: boolean;
    isWishlisted?: boolean;
    onToggleWishlist?: () => void;
    isInCart?: boolean;
    onAddToCart?: () => void;
    isInCart?: boolean;
    quantity?: number;
    onIncreaseQty?: () => void;
    onDecreaseQty?: () => void;
};