import {RECEIVE_POST_SUCCESS} from '../actions/appointments-actions';

const initialState = {
  appointments: [],
  postOK: false
};

export default function AppointmentsReducer (state = initialState, action = {}) {
  switch(action.type) {

    case RECEIVE_POST_SUCCESS:
      return Object.assign({}, state, {
        postOK: action.response
      });

    default:
      return state;
  }
}
