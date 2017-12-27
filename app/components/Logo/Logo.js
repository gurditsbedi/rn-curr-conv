import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <View style={styles.logoCombine}>
      <Image
        style={styles.logoBack}
        resizeMode="contain"
        source={require('./images/background.png')}
      />
      <Image style={styles.logo} resizeMode="contain" source={require('./images/logo.png')} />
    </View>
    <Text style={styles.logoText}>Currency Converter</Text>
  </View>
);

export default Logo;
