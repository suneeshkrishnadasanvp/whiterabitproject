import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid,Platform,Permissions} from 'react-native';
const option = {
  mediaType: 'photo',
};
export async function cameraTrigerHandler(callback) {
  requestCameraPermission(callback);
}
export async function galleryTrigerHandler(callback) {
  getGalleryPermissionAsync(callback)
}
const requestCameraPermission = async (callback) => {
  try {
  if(Platform.OS==="android") { const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Camera Permission",
        message:"App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given");
  launchCamera(option, callback);

    } else {
      alert("Camera permission denied")
      console.log("Camera permission denied");
    }}
    else{
      launchCamera(option, callback);
    }
  } catch (err) {
    console.warn(err);
  }
};

const getGalleryPermissionAsync = async (callback) => {
  if (Platform.OS==="ios") {
  
  launchImageLibrary(option, callback);
  }
  else {
   const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "App Gallery Permission",
        message:"App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given");
      launchImageLibrary(option, callback);

    }else {
      alert('Sorry, you must grant camera roll permissions in order to do this.');
    }
   
  }
};
