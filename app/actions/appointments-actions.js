import {hashHistory} from 'react-redux';
export const POST_APPOINTMENT = 'POST_APPOINTMENT';
export const RECEIVE_POST_SUCCESS = 'RECEIVE_POST_SUCCESS';
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';

export function postAppointment() {
  return {type: POST_APPOINTMENT};
}

export function receivePostSuccess() {
  return {
    type: RECEIVE_POST_SUCCESS,
    postOK: true
  }
}

export function recieveAppointments(data) {
  return {
    type: RECEIVE_APPOINTMENTS,
    data
  }
}

export function getAppointments(date/*, office*/) {
  return (dispatch/*, getState*/) => {
    //const endpoint = getState().config.settings.endpoint + 'appointments.json';
    let endpoint = 'https://54.208.105.112/appointments.json';
    if(date) {
      endpoint += '?date=' + date;
    }

    return fetch(endpoint, {
      method: 'GET',
      mode: 'cors'
    })
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {
      dispatch(recieveAppointments(responseJson));
    });
  }
}

export function createAppointment(data) {
  //use thunk middleware to be able to dispatch other actions from this one
  return (dispatch, getState) => {
    const endpoint = getState().config.settings.endpoint;

    //update state to mark fetch start
    dispatch(postAppointment());

    var request = new Request(endpoint + 'appointments.json', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });

    fetch(request).then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((responseJson) => {
      console.log('post success!');

      dispatch(receivePostSuccess(responseJson));
      hashHistory.push('/scheduleconfirmation');
      return responseJson;
    });
  }
}
