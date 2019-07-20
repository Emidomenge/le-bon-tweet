import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import BodyContainer from '.';
import mockPublicTweets from '../../mockData/publicTweets';
import mockPrivateTweets from '../../mockData/privateTweets';

const customProviderDecoratorWithPublicTweets = (story, storyBookData) => {
  const initialState = {
    tweetsReducer: {
      tweetsToDisplay: mockPublicTweets,
    },
  };
  return providerDecorator(story, storyBookData, initialState);
};

const customProviderDecoratorWithPrivateTweets = (story, storyBookData) => {
  const initialState = {
    tweetsReducer: {
      tweetsToDisplay: mockPrivateTweets,
    },
  };
  return providerDecorator(story, storyBookData, initialState);
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

storiesOf('Body Container', module)
  .addDecorator(providerDecorator)
  .add('no tweets', () => {
    const story = (
      <BodyContainer />
    );
    return story;
  });
