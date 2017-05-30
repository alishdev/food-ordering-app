import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import MainScreen from '../screens/MainScreen';
import StoresScreen from '../screens/StoresScreen';
import SelectedLocation from '../screens/SelectedLocation';
import MenuScreen from '../screens/MenuScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  main: () => MainScreen,
  stores: () => StoresScreen,
  store: () => SelectedLocation,
  menu: () => MenuScreen,
}));
