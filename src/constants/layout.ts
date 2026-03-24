import { Dimensions, Platform, PixelRatio } from 'react-native';
 
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
 
// Based on iPhone 14 Pro scale
const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;
 
const widthScale = SCREEN_WIDTH / DESIGN_WIDTH;
const heightScale = SCREEN_HEIGHT / DESIGN_HEIGHT;
 
export const wp = (size: number) => widthScale * size;
export const hp = (size: number) => heightScale * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (wp(size) - size) * factor;
// export const moderateVerticalScale = (size: number, factor = 0.5) =>
//   size + (verticalScale(size) - size) * factor;
 
// For font scaling that respects user's device settings
export const scaleFont = (size: number) => {
  const newSize = wp(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
 
// // Screen dimensions with orientation awareness
// export const screenWidth = SCREEN_WIDTH;
// export const screenHeight = SCREEN_HEIGHT;
// export const isSmallDevice = SCREEN_WIDTH < 375;
 
// // Pixel ratio scaling for ultra high-res devices
// export const normalizePixels = (size: number) => {
//   const scaledSize = size * widthScale;
//   return PixelRatio.roundToNearestPixel(scaledSize);
// };
// export const wp = (percent: string | number): number => {
//   const ratio = typeof percent === 'string' ? parseFloat(percent) / 100 : percent / 100;
//   return SCREEN_WIDTH * ratio;
// };
// export const hp = (percent: string | number): number => {
//   const ratio = typeof percent === 'string' ? parseFloat(percent) / 100 : percent / 100;
//   return SCREEN_HEIGHT * ratio;
// };