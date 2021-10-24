import {Alert} from 'react-native';

export function showAlert(msg) {
  alert(msg);
}

export function customAlert(msg) {
  Alert.alert('', msg, [{text: 'OK', onPress: () => {}}], {cancelable: false});
}
