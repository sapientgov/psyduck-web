import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../login';

jest.unmock('../login');

describe('<Login />', () => {
  it('outputs correct fields', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('updates state with username', () => {
    const wrapper = shallow(<Login />);
    const uinput = wrapper.find('input[name="username"]');
    expect(uinput.length).toBe(1);
    uinput.simulate('change', {target: {value: 'testtest'}});

    expect(wrapper.state('username')).toEqual('testtest');
  });

  it('updates state with password', () => {
    const wrapper = shallow(<Login />);
    const uinput = wrapper.find('input[name="password"]');
    expect(uinput.length).toBe(1);
    uinput.simulate('change', {target: {value: 'testtest'}});

    expect(wrapper.state('password')).toEqual('testtest');
  });
});
