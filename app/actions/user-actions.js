import {hashHistory} from 'react-router';

export const INIT_LOGIN = 'INIT_LOGIN';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';

//this will be an auth call eventually - just use username for now
export function initLogin(username/*, password*/) {
  return dispatch => {
    dispatch(loginComplete(username));
    hashHistory.push('/staff');
  }
}

export function loginComplete(username) {
  return {
    type: LOGIN_COMPLETE,
    username
  }
}
