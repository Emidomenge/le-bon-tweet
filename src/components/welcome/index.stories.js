import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import Welcome from './index';
import mockedServerAnswer from '../../mockData/serverAnswer';

const mainUser = mockedServerAnswer.authenticatedUserInfo;

storiesOf('Welcome', module)
  .addDecorator(providerDecorator)
  .add('with authenticated user', () => {
    const story = (
      <Welcome
        userInfo={mainUser.personalData}
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
