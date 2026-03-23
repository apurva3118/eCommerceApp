import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../Theme/colors';
import { TypographyProps } from './Typography';
import { fonts } from '../../theme/fonts';

export const textvariant = {
  /* ---------- HEADINGS ---------- */
  H1: {
    fontFamily: fonts.PoppinsBold,
    fontSize: 28,
  },
  H2: {
    fontFamily: fonts.PoppinsBold,
    fontSize: 24,
  },
  H3: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 20,
  },
  H4: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 16,
  },
  H5: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 14,
  },
  H6: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 12,
  },

  /* ---------- BODY ---------- */
  P1: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
  },
  P1M: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 16,
  },

  P2: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 14,
  },
  P2M: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 14,
  },

  P3: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 12,
  },
  P3M: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 12,
  },

  /* ---------- SMALL ---------- */
  P4: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 11,
  },
  P5: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 10,
  },
  PL: {
    fontFamily: fonts.PoppinsLight,
    fontSize: 12,
  }
};

const Typography = ({
  variant = 'P2',
  style,
  color,
  children,
  ...rest
}: TypographyProps) => {
  return (
    <Text
      {...rest}
      style={[
        textvariant[variant],
        { color: color },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;