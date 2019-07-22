import React from 'react';
import { mount } from 'enzyme/build';
import Thumbnail from './index';
import img from '../../../assets/img/welcome.svg';

// DEBUG: console.log(wrapper.html());
// DEBUG: console.log(wrapper.debug());

let wrapper;

describe('Common/Thumbnail - initial state', () => {
  beforeEach(() => {
    wrapper = mount(
      <Thumbnail
        image={img}
      />,
    );
  });

  it('should display an image only', () => {
    let elementWrapper = wrapper.find('Thumbnail img');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().source).not.toEqual(null);
    elementWrapper = wrapper.find('Thumbnail h4');
    expect(elementWrapper.text()).toEqual('');
  });

  it('should have thumbnail centered horizontally', () => {
    const elementWrapper = wrapper.find('Thumbnail Col');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().className.includes('flex')).toEqual(true);
    expect(elementWrapper.props().className.includes('justify-center')).toEqual(true);
  });
});

describe('Common/Thumbnail - img + label', () => {
  const testData = {
    image: img,
    label: 'Trop sympa !',
  };

  beforeEach(() => {
    wrapper = mount(
      <Thumbnail
        image={testData.image}
        label={testData.label}
      />,
    );
  });

  it('should display an image', () => {
    const elementWrapper = wrapper.find('Thumbnail img');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().source).not.toEqual(null);
  });

  it('should have label', () => {
    const elementWrapper = wrapper.find('Thumbnail h4');
    expect(elementWrapper.text()).toEqual(testData.label);
  });
});

describe('Common/Thumbnail - img + element', () => {
  const testData = {
    image: img,
    element: () => (
      <div id="test" className="w-100 bg-red">
        <p className="black">Je suis un props element</p>
      </div>
    ),
  };

  beforeEach(() => {
    wrapper = mount(
      <Thumbnail
        image={testData.image}
      >
        {testData.element()}
      </Thumbnail>,
    );
  });

  it('should display an image', () => {
    const elementWrapper = wrapper.find('Thumbnail img');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().source).not.toEqual(null);
  });

  it('should have label', () => {
    let elementWrapper = wrapper.find('Thumbnail #test');
    expect(elementWrapper.length).toEqual(1);
    elementWrapper = wrapper.find('Thumbnail #test p');
    expect(elementWrapper.length).toEqual(1);
  });
});
