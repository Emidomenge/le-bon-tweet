/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import initialState from '../../redux/initialState';
import serverAnswer from '../../mockData/serverAnswer';
import ProviderWrapper from '../../../.storybook/prodiverWrapper';
import TweetListContainer from './index';
import configureStore from '../../redux/store';
import mockPublicTweets from '../../mockData/publicTweets';

// DEBUG: console.log(wrapper.html());
// DEBUG: console.log(wrapper.debug());

let wrapper;
let customState;

describe('TweetListContainer - with public tweets', () => {
it('fetches data from server when server returns a successful response', () => {
    customState = initialState;
    customState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = mount(
      <ProviderWrapper store={configureStore(customState)}>
        <TweetListContainer
         mockedTweets={mockPublicTweets}
         />
      </ProviderWrapper>,
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
