import React from 'react';
import { mount } from 'enzyme';
import MessageForm from './index';

// DEBUG: console.log(wrapper.html());

it('display hello world', () => {
  const wrapper = mount(<MessageForm />);
  expect(wrapper.contains('Hello world')).toEqual(true);
});
