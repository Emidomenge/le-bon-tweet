import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../../.storybook/providerDecorator';
import TweetForm from './index';
import other from '../../../../mockData/other';
import initialState from '../../../../redux/initialState';

const customProviderDecorator = (story, storyBookData) => {
  const customInitialState = initialState;
  customInitialState.tweetFormReducer.isLoading = true;
  return providerDecorator(story, storyBookData, customInitialState);
};

storiesOf('TweetList Container/TweetForm', module)
  .addDecorator(providerDecorator)
  .add('initial state', () => {
    window.localStorage.setItem('jwtToken', other.jwtToken);
    const story = (<TweetForm />);
    return story;
  });


storiesOf('TweetList Container/TweetForm', module)
  .addDecorator(customProviderDecorator)
  .add('pending submition', () => {
    window.localStorage.setItem('jwtToken', other.jwtToken);
    const story = (
      <TweetForm
        text="Je pense que ce tweet ne va jamais être posté"
        type={['*']}
      />
    );
    return story;
  });
