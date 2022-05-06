import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
    borderRadius: 24,
    backgroundColor: theme.colors.brand
  },
  modal: {
    paddingBottom: getBottomSpace() + 16,
    backgroundColor: theme.colors.surface_primary
  },
  indicator: {
    width: 75,
    height: 3,
    padding: 0,
    backgroundColor: theme.colors.text_primary
  }
});


// sniped de style
// rnso