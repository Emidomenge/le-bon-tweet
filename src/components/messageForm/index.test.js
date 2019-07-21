import React from 'react';
import { mount } from 'enzyme';
import MessageForm from './index';
import ProviderWrapper from '../../../.storybook/prodiverWrapper';
import configureStore from '../../redux/store';
import initialState from '../../redux/initialState';

// DEBUG: console.log(wrapper.html());

let wrapper;

describe('tweet form tests', () => {
  beforeEach(() => {
    wrapper = mount(
      <ProviderWrapper store={configureStore(initialState)}>
        <MessageForm />
      </ProviderWrapper>,
    );
  });

  it('display hello world', () => {
    expect(wrapper.contains('Hello world')).toEqual(true);
  });
});
