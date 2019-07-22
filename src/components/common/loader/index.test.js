import React from 'react';
import { mount } from 'enzyme/build';
import Loader from './index';

// DEBUG: console.log(wrapper.html());
// DEBUG: console.log(wrapper.debug());

let wrapper;

describe('Common/Loader - initial state', () => {
  beforeEach(() => {
    wrapper = mount(
      <Loader />,
    );
  });

  it('should display a "ClimbingBoxLoader"', () => {
    const elementWrapper = wrapper.find('Loader EmotionCssPropInternal')
      .filterWhere(item => item.props().css.name === '1frtici-container-Loader');
    expect(elementWrapper.length).toEqual(1);
  });

  it('should be centered vertically + horizontally', () => {
    const elementWrapper = wrapper.find('Loader > div');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().className.includes('flex')).toEqual(true);
    expect(elementWrapper.props().className.includes('items-center')).toEqual(true);
    expect(elementWrapper.props().className.includes('justify-center')).toEqual(true);
  });

  it('should display a label with value "Chargement..."', () => {
    const elementWrapper = wrapper.find('Loader div').filterWhere(item => item.props().className === '' && item.text() === 'Chargement...');
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have "ClimbingBoxLoader" + label align vertically', () => {
    const elementWrapper = wrapper.find('Loader > div');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().className.includes('flex-column')).toEqual(true);
  });
});
