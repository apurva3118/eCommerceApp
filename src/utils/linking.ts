import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  MainTabs: undefined;
  SeeAll: { type: string };
  Settings: undefined;
  ProductDetails: {
    title: string;
    image: ImageSourcePropType;
    price?: string;
    description?: string,
  };
  SearchProducts: undefined;
  Checkout: undefined;
  Orders: undefined;
  Filters: undefined
};