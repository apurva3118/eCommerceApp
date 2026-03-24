export type IProductCardProps = {
    title: string;
    price: string;
    image: ImageSourcePropType;
    description: string,
    onPress?: () => void;
    showAddButton?: boolean;
};