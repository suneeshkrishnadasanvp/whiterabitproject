//Server
const server = {
 
  develop: {
    auth: 'http://www.mocky.io/v2',
  },
};

const key = {};

//Environment
const env = {
 
  develop: {
    api: {
      auth: `${server.develop.auth}`,
    },
  },
};

//Api
const all = {
  routes: {
    UserList: '/5d565297300000680030a986',
  },
};

export default {
  ...env.develop,
  ...all,
  ...key,
};
