import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',

  // $outline: 1,
});

export default () => <CurrencyList />;
