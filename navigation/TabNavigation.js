import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DetailSelection from '../screens/DetailSelection'
import Settings from '../screens/Settings';

const TabNavigator = createBottomTabNavigator({
    DetailSelection,
    Settings,
  });
  
  export default createAppContainer(TabNavigator);