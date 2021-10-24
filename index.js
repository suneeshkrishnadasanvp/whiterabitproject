/**
 * @format
 */
 import 'react-native-gesture-handler';
 import {AppRegistry, LogBox} from 'react-native';
 import App from './src/app/App';
 import {name as appName} from './src/app/app.json';
 LogBox.ignoreLogs([
   'Warning: Cannot update a component from inside the function body of a different component',
   'Remote debugger is in a background tab which may cause apps to perform slowly',
 ]);
 AppRegistry.registerComponent(appName, () => App);
 