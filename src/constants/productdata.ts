import { ImageSourcePropType } from "react-native";
import { card, cash, paypal } from "../assets/svgs";

export interface ProductItem {
    id: string;
    image: ImageSourcePropType;
    title: string;
    price: string;
    description: string;
    rating: number;
    reviews: number;
    size: (string | number)[];
    brand?: string;
    orderstatus?: string
}

export const ProductData: ProductItem[] = [
    {
        id: '1',
        image: require('../assets/images/watch.png'),
        title: 'Watch',
        price: '$ 40',
        description: 'Classic analog watch with leather strap and water resistance.',
        rating: 4.5,
        reviews: 120,
        size: [1],
        brand: 'Rollex'
    },
    {
        id: '2',
        image: require('../assets/images/shoes.png'),
        title: 'Nike Shoes',
        price: '$ 430',
        description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
        brand: 'Nike'
    },
    {
        id: '3',
        image: require('../assets/images/airpod.png'),
        title: 'Boat Airpods',
        price: '$ 430',
        description: 'Wireless earbuds with deep bass, noise isolation, and long battery life.',
        rating: 4.8,
        reviews: 320,
        size: [1],
        brand: 'Boat'
    },
];
export const ProductDataMostPopular: ProductItem[] = [
    {
        id: '4',
        image: require('../assets/images/lgtv.png'),
        title: 'LG TV',
        price: '$ 4000',
        description: '4K Ultra HD Smart TV with HDR support and immersive sound.',
        rating: 4.5,
        reviews: 120,
        size: [1],
    },
    {
        id: '5',
        image: require('../assets/images/jacket.png'),
        title: 'Jacket',
        price: '$ 430',
        description: 'Warm winter jacket with windproof fabric and modern fit.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
    },
    {
        id: '6',
        image: require('../assets/images/hoodie.png'),
        title: 'Hoodie',
        price: '$ 430',
        description: 'Comfortable cotton hoodie with soft lining and relaxed fit.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
    },
];
export const AllProucts: ProductItem[] = [
    {
        id: '4',
        image: require('../assets/images/lgtv.png'),
        title: 'LG TV',
        price: '$ 4000',
        description: '4K Ultra HD Smart TV with HDR support and immersive sound.',
        rating: 4.5,
        reviews: 120,
        size: [1],
        orderstatus: 'Cancel',
        brand: 'LG'
    },
    {
        id: '5',
        image: require('../assets/images/jacket.png'),
        title: 'Jacket',
        price: '$ 430',
        description: 'Warm winter jacket with windproof fabric and modern fit.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
        orderstatus: 'Active',
        brand: 'H&M'
    },
    {
        id: '6',
        image: require('../assets/images/hoodie.png'),
        title: 'Hoodie',
        price: '$ 430',
        description: 'Comfortable cotton hoodie with soft lining and relaxed fit.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
        orderstatus: 'Completed',
        brand: 'Gap'
    },
    {
        id: '1',
        image: require('../assets/images/watch.png'),
        title: 'Watch',
        price: '$ 40',
        description: 'Classic analog watch with leather strap and water resistance.',
        rating: 4.5,
        reviews: 120,
        size: [1],
        orderstatus: 'Completed',
        brand: 'Rolex'
    },
    {
        id: '2',
        image: require('../assets/images/shoes.png'),
        title: 'Nike Shoes',
        price: '$ 430',
        description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
        rating: 4.8,
        reviews: 320,
        size: [6, 7, 8, 9, 10],
        orderstatus: 'Cancel',
        brand: 'Nike'
    },
    {
        id: '3',
        image: require('../assets/images/airpod.png'),
        title: 'Boat Airpods',
        price: '$ 430',
        description: 'Wireless earbuds with deep bass, noise isolation, and long battery life.',
        rating: 4.8,
        reviews: 320,
        size: [1],
        orderstatus: 'Cancel',
        brand: 'Boat'
    },
];
export const SETTINGS_DATA = [
    {
        id: '1',
        title: 'Notification',
        icon: require('../assets/images/notification.png'),
    },
    {
        id: '2',
        title: 'Language',
        icon: require('../assets/images/language.png'),
        rightText: 'English',
    },
    {
        id: '3',
        title: 'Privacy',
        icon: require('../assets/images/privacy.png'),
    },
    {
        id: '4',
        title: 'Help Center',
        icon: require('../assets/images/helpcenter.png'),
    },
    {
        id: '5',
        title: 'About us',
        icon: require('../assets/images/aboutus.png'),
    },
];
export const PAYMENT_OPTIONS = [
    { id: '1', title: 'Paypal', icon: paypal },
    { id: '2', title: 'Credit Card', icon: card },
    { id: '3', title: 'Cash', icon: cash },
];