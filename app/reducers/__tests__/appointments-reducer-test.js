import AppointmentsReducer from '../appointments-reducer';
import {RECEIVE_POST_SUCCESS, receivePostSuccess} from '../../actions/appointments-actions';

jest.unmock('../appointments-reducer');
jest.unmock('../../actions/appointments-actions');

describe('appointments-reducer', () => {
  it('has meaningful initial state', () => {
    expect(AppointmentsReducer()).toEqual({
      appointments: [],
      postOK: false
    });
  });

  it('completes post of new appointment', () => {
    expect(AppointmentsReducer(null, receivePostSuccess({
      firstname: 'a',
      lastname: 'b',
      phone: '12345'
    }))).toEqual({
      postOK: undefined
    });
  });
});
