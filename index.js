/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './js/navigator/AppNavigator';
import WelcomePage from './js/pages/WelcomePage';
AppRegistry.registerComponent(appName, () => AppNavigator);
