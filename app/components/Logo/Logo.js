import React, { Component } from 'react';
import { View, Text, Animated, Keyboard } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentWillMount() {
    this.showKeyboardListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
    this.hideKeyboardListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
  }

  componentWillUpdate() {
    this.showKeyboardListener.remove();
    this.hideKeyboardListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <View style={styles.logoCombine}>
          <Animated.Image
            style={containerImageStyle}
            resizeMode="contain"
            source={require('./images/background.png')}
          />
          <Animated.Image
            style={imageStyle}
            resizeMode="contain"
            source={require('./images/logo.png')}
          />
        </View>
        <Text style={styles.logoText}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
