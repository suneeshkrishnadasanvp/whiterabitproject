import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setPreference(key, value) {
  try {
    await AsyncStorage.setItem(key, `${value}`);
  } catch (e) {
    throw e;
  }
}

export async function getPreference(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    throw e;
  }
}

export async function removePreference(key) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    throw e;
  }
}
