import {setLogin, isLoggedIn} from '../../data/user';
import {generateRandomKey} from '../../helpers';
import {api, catchHandler} from '../../helpers/axios';
import configure from '../../configure';

export async function gatherUserList(data) {
  return (await api())
    .get(configure.routes.UserList, data)
    .then((res) => res.data)
    .catch(catchHandler);
}
