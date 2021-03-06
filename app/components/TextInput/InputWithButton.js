import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const containerStyles = [styles.container];

  if (!props.editable) containerStyles.push(styles.containerDisabled);
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  const buttonTextStyles = [styles.buttonText];
  if (props.textColor) buttonTextStyles.push({ color: props.textColor });

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        underlayColor={underlayColor}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyles}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} underlineColorAndroid="transparent" />
    </View>
  );
};

export default InputWithButton;
