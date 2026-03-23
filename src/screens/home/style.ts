import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B4FD4',
  },
});