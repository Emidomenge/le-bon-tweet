import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../.storybook/providerDecorator';
import HeaderNavbar from './index';
import initState from '../../redux/initialState';
import serverAnswer from '../../mockData/serverAnswer';

const initialState = initState;
initialState.userReducer.userInfo = serverAnswer.authenticatedUserInfo;

storiesOf('Header Navbar', module)
  .addDecorator((story, storyBookData) => (providerDecorator(story, storyBookData, initialState)))
  .add('normal navbar', () => {
    const story = (
      <HeaderNavbar />
    );
    return story;
  });
