import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import BodyContainer from '.';
import mockPublicTweets from '../../mockData/publicTweets';
import mockPrivateTweets from '../../mockData/privateTweets';

storiesOf('Body Container', module)
  .addDecorator(providerDecorator)
  .add('with public tweets', () => {
    const story = (
      <BodyContainer
        mockedTweets={mockPublicTweets}
      />
    );
    return story;
  })
  .add('with private tweets', () => {
    const story = (
      <BodyContainer
        mockedTweets={mockPrivateTweets}
      />
    );
    return story;
  })
  .add('no tweets', () => {
    const story = (
      <BodyContainer />
    );
    return story;
  })
  .add('fetching error', () => {
    const story = (
      <BodyContainer
        apiCodeAnswer={403}
      />
    );
    return story;
  });
