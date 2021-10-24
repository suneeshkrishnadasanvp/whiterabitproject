import axios from 'axios';
import configure from '../configure';
import {token} from '../data/user';
const customHeader = async () => ({
  'Content-Type': 'application/json',
  Authorization: ``,
});



export async function api(value) {
  let opts = {
    baseURL: configure.api[value ? value : 'auth'].trim(),
    headers: await customHeader(),
  };
  console.log('opts', opts);
  return axios.create(opts);
}


export function catchHandler(e) {
  let res =
    e.response && e.response.data
      ? e.response.data
      : {message: 'Network failed! Please try again'};

  if (e.response && e.response.status === 401) {
  }
  throw res;
}
