import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import HeaderNavbar from './index';

storiesOf('Header Navbar', module)
  .addDecorator(providerDecorator)
  .add('normal navbar', () => {
    const story = (
      <HeaderNavbar />
    );
    return story;
  });
