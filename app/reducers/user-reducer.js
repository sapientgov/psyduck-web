import {LOGIN_COMPLETE} from '../actions/user-actions';

export default function UserReducer(state = null, action = {}) {
  switch(action.type) {
    case LOGIN_COMPLETE:
      return action.username;
    default:
      return state;
  }
}
