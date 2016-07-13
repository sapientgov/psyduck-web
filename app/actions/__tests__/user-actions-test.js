import {LOGIN_COMPLETE, initLogin, loginComplete} from '../user-actions';
import {hashHistory} from 'react-router';

jest.unmock('../user-actions');

describe('user-actions', () => {
  it('completes login', () => {
    expect(loginComplete('test')).toEqual({
      type: LOGIN_COMPLETE,
      username: 'test'
    });
  });

  it('inits login', () => {
    const dispatchSpy = jasmine.createSpy('dispatchSpy');
    const action = initLogin('testuser', 'testpass');
    expect(typeof action === 'function').toBe(true);
    hashHistory.push = jest.fn();
    action(dispatchSpy);
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
