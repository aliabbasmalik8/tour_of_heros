import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

interface addReducerState {
  login: boolean
}

const initialState = {
  login: false
};

export function reducer( state = initialState, action) {
  switch ( action.type) {
    case ACTION_LOGOUT:
      return{
        ...state,
        login: false
      };

    case ACTION_LOGIN:
      return{
        ...state,
        login: true
      };
  }
  return state;
}
