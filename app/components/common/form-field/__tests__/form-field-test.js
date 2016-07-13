import React from 'react';
import {shallow} from 'enzyme';

jest.unmock('../form-field');

import FormField from '../form-field';

describe('<FormField />', () => {
  it('outputs correct elements', () => {
     const wrapper = shallow(<FormField id="testID" formKey="testKey" label="testLabel" handleChange={() => { /*noop*/ }}/>);
     expect(wrapper.find('label').length).toBe(1);
     expect(wrapper.find('input').length).toBe(1);
   });

   it('calls handleChange on input change', () => {
     const wrapper = shallow(<FormField id="testID" formKey="testKey" label="testLabel" handleChange={() => { /*noop*/ }}/>);
     const uinput = wrapper.find('input');
     expect(uinput.length).toBe(1);

     //check that correct dispatches happened
     spyOn(wrapper.instance(), 'handleChange');
     uinput.simulate('change', {target: {value: 'testtest'}});
     expect(wrapper.instance().handleChange).toHaveBeenCalled;
   });

});
