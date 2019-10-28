
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'

const AppNavigation = createStackNavigator(
    {
      Home
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  );

  export default AppNavigation