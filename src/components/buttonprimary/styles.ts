import { StyleSheet } from 'react-native';
import { hp, wp } from '../../constants/layout';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: hp(2),
  },

  button: {
    backgroundColor: colors.primaryColor,
    width: wp(358),
    height: hp(55),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,

  },

  disabled: {
    opacity: 0.6,
  },
});
