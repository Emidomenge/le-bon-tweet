import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/tachyons.min.css';
import { Provider } from 'react-redux';
import MessageForm from './components/messageForm';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <MessageForm />
  </Provider>,
  document.getElementById('root'),
);
