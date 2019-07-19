import React from 'react';
import ProviderWrapper from './prodiverWrapper';
import configureStore from './../src/redux/store';

const store = configureStore();

const providerDecorator = story => (
  <ProviderWrapper store={store}>
    { story() }
  </ProviderWrapper>
);

export default providerDecorator;