import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import { styles } from './styles';
import { ButtonPrimaryProps } from './types';
import Typography from '../typography';
import { colors } from '../../theme/colors';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  txtStyle,
}) => {

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        testID="primary-button"
        activeOpacity={0.8}
        disabled={disabled || loading}
        onPress={onPress}
        style={[
          styles.button,
          style,
          (disabled || loading) && styles.disabled,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Typography variant="H4" style={[styles.text, txtStyle]}>{title}</Typography>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;
