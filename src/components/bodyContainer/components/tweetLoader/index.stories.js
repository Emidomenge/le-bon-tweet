import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import TweetLoader from './index';


storiesOf('Tweet Container', module)
  .addDecorator(providerDecorator)
  .add('tweet loading...', () => {
    const story = (
      <TweetLoader />
    );
    return story;
  });
