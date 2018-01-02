import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',

  $white: '#fff',
  $lightGray: '#f0f0f0',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $darkText: '#343434',

  // $outline: 1,
});

export default () => <Navigator />;
