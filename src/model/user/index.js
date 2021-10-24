import * as service from '../../service/user';
import {showAlert} from '../../helpers/alert';
import {capitalize} from '../../helpers';
export default {
  state: {
    loading: false,
    loginStatus: false,
    UserList:[],
    UserDetails:{}
  },
  reducers: {
    onRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    onSuccess(state, data) {
      return {
        ...state,
        UserList: data,
      };
    },
    onSetUserSuccess(state, data) {
      return {
        ...state,
        UserDetails: data,
      };
    },
    onError(state, data) {
      var msg =
        data.message && data.message.length
          ? capitalize(data.message)
          : 'Server updating...';
      showAlert(msg);
      return {
        ...state,
        errorMessage: msg,
        loading: false,
      };
    },

  },
  effects: {
    async gatherUserList(payload, rootState) {
      try {
        let res = await service.gatherUserList(payload);
        this.onSuccess(res)
        return res;
      } catch (e) {
        this.onError(e);
      }
    },
    
  },
};
