import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme.colors.surface_secondary
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    marginTop: 8,
    color: theme.colors.text_primary
  }
});