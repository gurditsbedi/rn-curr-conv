import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List/';

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import currencies from '../data/currencies';

class CurrencyList extends Component {
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') this.props.dispatch(changeBaseCurrency(currency));
    else if (type === 'quote') this.props.dispatch(changeQuoteCurrency(currency));
    this.props.navigation.goBack(null);
  };

  render() {
    const comparisonCurrency =
      this.props.navigation.state.params.type === 'base'
        ? this.props.baseCurrency
        : this.props.quoteCurrency;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
});

export default connect(mapStateToProps)(CurrencyList);
