import { ReactNode } from 'react';
import {
  TextProps,
  NativeSyntheticEvent,
  TextLayoutEventData,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';

export interface TypographyProps extends TextProps {
  variant?:
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'P1'
  | 'P1M'
  | 'P2'
  | 'P2M'
  | 'P3'
  | 'P3M'
  | 'P4'
  | 'P5'
  | 'PL';

  color?: string;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;

  onPress?: (event: GestureResponderEvent) => void;
}
