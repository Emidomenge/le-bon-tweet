import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import TweetContainer from './index';
import mockPublicTweets from '../../../../mockData/publicTweets';
import mockPrivateTweets from '../../../../mockData/privateTweets';

const mockPublicTweet = mockPublicTweets[0];
const mockPrivateTweet = mockPrivateTweets[1];

storiesOf('TweetList Container/Tweet', module)
  .addDecorator(providerDecorator)
  .add('public tweet', () => {
    const story = (
      <TweetContainer
        author={mockPublicTweet.createdByUser.fullName}
        authorImage={mockPublicTweet.createdByUser.picture}
        creationDate={mockPublicTweet.createdAt}
        text={mockPublicTweet.text}
        restrictedTo={mockPublicTweet.restrictedTo}
      />
    );
    return story;
  })
  .add('private tweet', () => {
    const story = (
      <TweetContainer
        author={mockPrivateTweet.createdByUser.fullName}
        authorImage={mockPrivateTweet.createdByUser.picture}
        creationDate={mockPrivateTweet.createdAt}
        text={mockPrivateTweet.text}
        restrictedTo={mockPrivateTweet.restrictedTo}
      />
    );
    return story;
  });
