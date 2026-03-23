import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02, 
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
  },

  hello: {
    fontSize: width * 0.035,
    color: 'gray',
  },

  name: {
    fontSize: width * 0.045,
    fontWeight: '700',
  },

  bellContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.cardShadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
});