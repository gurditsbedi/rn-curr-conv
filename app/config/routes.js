import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const routes = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title,
      }),
    },
  },
  {
    cardStyle: {
      paddingTop: StatusBar.currentHeight,
    },
  },
);

export default routes;
