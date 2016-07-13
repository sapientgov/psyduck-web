import {RECEIVE_POST_SUCCESS, createAppointment, postAppointment, receivePostSuccess} from '../appointments-actions';
import {hashHistory} from 'react-router';

jest.unmock('../appointments-actions');

describe('appointments-actions', () => {
  it('posts a new appointment', () => {
    expect(receivePostSuccess({
      firstname: 'a',
      lastname: 'b',
      phone: '12345'
    })).toEqual({
      type: RECEIVE_POST_SUCCESS,
      postOK: true
    });
  });

  it('launches appointment creation', () => {
    window.Request = jest.fn();
    window.Headers = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      reponse: "OK"
    }));
    const dispatchSpy = jasmine.createSpy('dispatchSpy');
    const action = createAppointment({
      firstname: 'a',
      lastname: 'b',
      phone: '12345'
    });
    expect(typeof action === 'function').toBe(true);
    hashHistory.push = jest.fn();
    action(dispatchSpy);
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
