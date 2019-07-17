import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageForm from './index';

storiesOf('Form Message', module)
  .add('Initial state', () => {
    const story = (<MessageForm />);
    return story;
  });
