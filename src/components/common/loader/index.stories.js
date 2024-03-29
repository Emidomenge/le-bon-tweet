import React from 'react';
import {storiesOf} from '@storybook/react';
import providerDecorator from '../../../../.storybook/providerDecorator';
import Loader from './index';

storiesOf('Common Components/Loader', module)
  .addDecorator(providerDecorator)
  .add('basic loader', () => {
    const story = (
      <Loader />
    );
    return story;
  });
