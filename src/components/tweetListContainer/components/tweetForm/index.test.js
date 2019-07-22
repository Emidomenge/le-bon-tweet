/* eslint-disable max-len */
import React from 'react';
import { mount } from 'enzyme';
import ProviderWrapper from '../../../../../.storybook/prodiverWrapper';
import configureStore from '../../../../redux/store';
import initialState from '../../../../redux/initialState';
import serverAnswer from '../../../../mockData/serverAnswer';
import TweetForm from './index';

// DEBUG: console.log(wrapper.html());
// DEBUG: console.log(wrapper.debug());

let wrapper;
let customState;

describe('TweetForm - initial state', () => {
  beforeEach(() => {
    customState = initialState;
    customState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;
    wrapper = mount(
      <ProviderWrapper store={configureStore(customState)}>
        <TweetForm />
      </ProviderWrapper>,
    );
  });

  it('should have a form with user profile picture', () => {
    const elementWrapper = wrapper.find('TweetForm img');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().src).toEqual(customState.userReducer.userInfo.personalData.picture);
  });

  it('should have a form with a textarea input', () => {
    expect(wrapper.find('form textarea').length).toEqual(1);
  });

  it('should have a form with a radio button "actu"', () => {
    let elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'publicTweet');
    expect(elementWrapper.length).toEqual(1);
    elementWrapper = wrapper.find('form fieldset div label')
      .filterWhere(item => item.props().children.toString().includes("Actu' Tweet"));
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have a form with a radio button "secret"', () => {
    let elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'privateTweet');
    expect(elementWrapper.length).toEqual(1);
    elementWrapper = wrapper.find('form fieldset div label')
      .filterWhere(item => item.props().children.toString().includes('Secret Tweet'));
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have a form with a submit button "Tweeter"', () => {
    const elementWrapper = wrapper.find('form button');
    expect(elementWrapper.length).toEqual(1);
    expect(elementWrapper.props().children.toString().includes('Tweeter')).toEqual(true);
  });

  it('should have a form with a submit button disable by default', () => {
    const elementWrapper = wrapper.find('form button');
    expect(elementWrapper.props().disabled).toEqual(true);
  });
});

describe('TweetForm - submitting state - public tweet', () => {
  const testData = {
    text: 'Je pense que ce tweet ne va jamais être posté',
    type: ['*'],
  };
  beforeEach(() => {
    customState = initialState;
    customState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;
    customState.tweetFormReducer.isLoading = true;
    wrapper = mount(
      <ProviderWrapper store={configureStore(customState)}>
        <TweetForm
          text={testData.text}
          type={testData.type}
        />
      </ProviderWrapper>,
    );
  });

  it('should have a submit button with loading spinner', () => {
    const elementWrapper = wrapper.find('form button SpinnerLoader');
    expect(elementWrapper.length).toEqual(1);
  });

  it('should have a submit button with disable state while submitting', () => {
    const elementWrapper = wrapper.find('form button');
    expect(elementWrapper.props().disabled).toEqual(true);
  });

  it('should have a tweet message filled in the textarea of the form', () => {
    const elementWrapper = wrapper.find('form textarea');
    expect(elementWrapper.text().includes(testData.text)).toEqual(true);
  });

  it('should have textarea input disabled', () => {
    const elementWrapper = wrapper.find('form textarea');
    expect(elementWrapper.props().disabled).toEqual(true);
  });

  it('should have radiobutton "public tweet" selected', () => {
    let elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'publicTweet');
    expect(elementWrapper.props().checked).toEqual(true);
    elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'privateTweet');
    expect(elementWrapper.props().checked).toEqual(false);
  });

  it('should have all radiobuttons disabled', () => {
    let elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'publicTweet');
    expect(elementWrapper.props().disabled).toEqual(true);
    elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'privateTweet');
    expect(elementWrapper.props().disabled).toEqual(true);
  });
});

// Same custom state

describe('TweetForm - submitting state - private tweet', () => {
  const testData = {
    text: 'Je pense que ce tweet ne va jamais être posté',
    type: ['123456789'],
  };
  beforeEach(() => {
    customState = initialState;
    customState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;
    customState.tweetFormReducer.isLoading = true;
    wrapper = mount(
      <ProviderWrapper store={configureStore(customState)}>
        <TweetForm
          text={testData.text}
          type={testData.type}
        />
      </ProviderWrapper>,
    );
  });

  it('should have radiobutton "private tweet" selected', () => {
    let elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'publicTweet');
    expect(elementWrapper.props().checked).toEqual(false);
    elementWrapper = wrapper.find('form input')
      .filterWhere(item => item.props().type === 'radio' && item.props().id === 'privateTweet');
    expect(elementWrapper.props().checked).toEqual(true);
  });
});
