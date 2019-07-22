import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import TweetLoader from './index';


storiesOf('TweetList Container/Tweet', module)
  .addDecorator(providerDecorator)
  .add('tweet loading...', () => {
    const story = (
      <TweetLoader />
    );
    return story;
  })
  .add('[phone version] tweet loading...', () => {
    const story = (
      <TweetLoader
        isPhoneVersion
      />
    );
    return story;
  });
