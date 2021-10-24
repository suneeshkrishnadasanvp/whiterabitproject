/* eslint-disable no-shadow */
import {getPreference, setPreference, removePreference} from '../async';
import key from '../key';
export async function token() {
  try {
    const token = await getPreference(key.token);
    if (token) {
      return token;
    } else {
      return '';
    }
  } catch (e) {
    return '';
  }
}

export async function setLogin(value) {
  await setPreference(key.loged_in, value ? 'true' : '');
  if (value) {
    await setPreference(key.existing_app, 'true');
  }
}
export async function removeUser() {
  try {
    await removePreference(key.token);
    await removePreference(key.user);
  } catch (e) {
    return null;
  }
}
export async function getLogin(value) {
  try {
    let response = await getPreference(key.loged_in);
    return response === 'true' ? true : false;
  } catch (err) {
    return false;
  }
}
export async function isLoggedIn() {
  try {
    const token = await getPreference(key.loged_in);
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
export async function setUser(data) {
  try {
    if (data.token) {
      await setPreference(key.token, data.token);
    }
    if (data.user) {
      await setPreference(key.user, JSON.stringify(data.user));
    }
  } catch (e) {
    return null;
  }
}
export async function getUser() {
  try {
    const user = await getPreference(key.user);
    return JSON.parse(user);
  } catch (e) {
    return null;
  }
}
export async function isExisting() {
  try {
    let response = await getPreference(key.existing_app);
    return response === 'true' ? true : false;
  } catch (err) {
    return false;
  }
}
