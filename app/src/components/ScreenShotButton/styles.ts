import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    position: 'relative',
    backgroundColor: theme.colors.surface_secondary
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: 40,
    height: 40,
  }
});