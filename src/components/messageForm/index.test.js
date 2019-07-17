import React from 'react';
import { mount } from 'enzyme';
import MessageForm from './index';

it('renders without crashing', () => {
  const wrapper = mount(<MessageForm />);
  expect(wrapper.contains('Hello world')).toEqual(true);
});
