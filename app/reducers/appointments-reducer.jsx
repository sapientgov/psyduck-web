import {RECEIVE_POST_SUCCESS, RECEIVE_APPOINTMENTS} from '../actions/appointments-actions';

const initialState = {
  items: [],
  postOK: false
};

export default function AppointmentsReducer (state = initialState, action = {}) {
  switch(action.type) {

    case RECEIVE_POST_SUCCESS:
      return Object.assign({}, state, {
        postOK: action.response
      });

    case RECEIVE_APPOINTMENTS:
      return Object.assign({}, state, {
        items: action.data
      });

    default:
      return state;
  }
}
