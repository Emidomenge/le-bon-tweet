import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import BodyContainer from '.';
import mockPublicTweets from '../../mockData/publicTweets';
import mockPrivateTweets from '../../mockData/privateTweets';

const customProviderDecoratorWithPublicTweets = (story) => {
  const initialState = {
    tweetsReducer: {
      tweetsToDisplay: mockPublicTweets,
    },
  };
  return providerDecorator(story, initialState);
};

const customProviderDecoratorWithPrivateTweets = (story) => {
  const initialState = {
    tweetsReducer: {
      tweetsToDisplay: mockPrivateTweets,
    },
  };
  return providerDecorator(story, initialState);
};

storiesOf('Body Container', module)
  .addDecorator(customProviderDecoratorWithPublicTweets)
  .add('with public tweets', () => {
    const story = (
      <BodyContainer />
    );
    return story;
  });


storiesOf('Body Container', module)

  .addDecorator(customProviderDecoratorWithPrivateTweets)
  .add('with private tweets', () => {
    const story = (
      <BodyContainer />
    );
    return story;
  });
