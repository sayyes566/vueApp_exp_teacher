//import 'expo'
import { KeepAwake, registerRootComponent } from 'expo';
/*import App from '../../App';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);*/
import { AppRegistry } from 'react-native';
import App from './App';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
AppRegistry.registerComponent('exp_teacher', () => App);
