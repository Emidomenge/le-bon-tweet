import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import MessageContainer from './index';
import mockTweets from '../../../../mockData/tweets';
import mockUsers from '../../../../mockData/users';
import userLib from '../../../../lib/user';

const mockPublicTweet = mockTweets[0];
const mockPrivateTweet = mockTweets[1];
const user = mockUsers[0];

storiesOf('Message Container', module)
  .addDecorator(providerDecorator)
  .add('public message', () => {
    const story = (
      <MessageContainer
        author={userLib.getFullName(user)}
        authorImage={user.picture}
        creationDate={mockPublicTweet.createdAt}
        text={mockPublicTweet.text}
        restrictedTo={mockPublicTweet.restrictedTo}
      />
    );
    return story;
  })
  .add('private message', () => {
    const story = (
      <MessageContainer
        author={userLib.getFullName(user)}
        authorImage={user.picture}
        creationDate={mockPrivateTweet.createdAt}
        text={mockPrivateTweet.text}
        restrictedTo={mockPrivateTweet.restrictedTo}
      />
    );
    return story;
  });
