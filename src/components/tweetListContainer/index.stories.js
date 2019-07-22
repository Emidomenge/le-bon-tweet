import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import TweetListContainer from '.';
import mockPublicTweets from '../../mockData/publicTweets';
import mockPrivateTweets from '../../mockData/privateTweets';

storiesOf('TweetList Container', module)
  .addDecorator(providerDecorator)
  .add('with public tweets', () => {
    const story = (
      <TweetListContainer
        mockedTweets={mockPublicTweets}
      />
    );
    return story;
  })
  .add('with private tweets', () => {
    const story = (
      <TweetListContainer
        mockedTweets={mockPrivateTweets}
      />
    );
    return story;
  })
  .add('no tweets', () => {
    const story = (
      <TweetListContainer />
    );
    return story;
  })
  .add('fetching error', () => {
    const story = (
      <TweetListContainer
        apiCodeAnswer={403}
      />
    );
    return story;
  });
