import React from 'react'
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../.storybook/providerDecorator';
import SpinnerLoader from './index';

storiesOf('Common Components/Loader', module)
  .addDecorator(providerDecorator)
  .add('spinner loader', () => {
    const story = (
      <SpinnerLoader />
    );
    return story;
  });
