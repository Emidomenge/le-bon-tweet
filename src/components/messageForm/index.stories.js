import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import MessageForm from './index';

storiesOf('Form Message', module)
  .addDecorator(providerDecorator)
  .add('Initial state', () => {
    const story = (<MessageForm />);
    return story;
  });
