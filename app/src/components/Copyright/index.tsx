import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <>
      <Text style={styles.text}>
        Feito por Patrick Lucas
      </Text>
    </>
  );
}