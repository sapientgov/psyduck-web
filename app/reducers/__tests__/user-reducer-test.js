import UserReducer from '../user-reducer';
import {loginComplete} from '../../actions/user-actions';

jest.unmock('../user-reducer');
jest.unmock('../../actions/user-actions');

describe('user-reducer', () => {
  it('has empty initial state', () => {
    expect(UserReducer()).toBeNull();
  });

  it('completes login', () => {
    expect(UserReducer(null, loginComplete('user'))).toEqual('user');
  });
});
