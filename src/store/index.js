import {init} from '@rematch/core';
import * as models from '../model';
import {reducer as formReducer} from 'redux-form';

const store = init({
  redux: {
    reducers: {
      router: {},
      form: formReducer,
    },
  },
  models,
});

export {store};
