import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import Welcome from './index';


storiesOf('Welcome', module)
  .addDecorator(providerDecorator)
  .add('with authenticated user', () => {
    const story = (
      <Welcome
        isAuthenticated
      />
    );
    return story;
  })
  .add('with default behaviour', () => {
    const story = (
      <Welcome />
    );
    return story;
  });
