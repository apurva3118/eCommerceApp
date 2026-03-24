import { ViewStyle } from "react-native";

export interface ButtonPrimaryProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle | ViewStyle[];
    txtStyle?: TextStyle | TextStyle[];
  }