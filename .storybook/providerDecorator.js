import React from 'react';
import ProviderWrapper from './prodiverWrapper';
import configureStore from './../src/redux/store';

const providerDecorator = (story, storyBookData, initialState) => {
    return (
      <ProviderWrapper store={configureStore(initialState)}>
        { story() }
      </ProviderWrapper>
  )
};

export default providerDecorator;