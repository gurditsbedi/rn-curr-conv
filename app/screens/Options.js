import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {
    console.log('press themes');
  };
  handleSitePress = () => {
    console.log('press Site');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={<Ionicons name="md-arrow-forward" color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={<Ionicons name="md-link" color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
