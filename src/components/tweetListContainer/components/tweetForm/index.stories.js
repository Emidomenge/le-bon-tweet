import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import MessageForm from '.';
import other from '../../../../mockData/other';

storiesOf('TweetList Container/TweetForm', module)
  .addDecorator(providerDecorator)
  .add('initial state', () => {
    window.localStorage.setItem('jwtToken', other.jwtToken);
    const story = (<MessageForm />);
    return story;
  });
