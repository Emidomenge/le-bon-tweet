import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MessageForm from './components/messageForm/index';
import './assets/css/tachyons.min.css';
import './assets/css/bootstrap.min.css';
import HeaderNavbar from './components/headerNavbar';
import MessagesContainer from './components/bodyContainer';
import './index.css';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <HeaderNavbar />
    <MessagesContainer>
      <MessageForm />
    </MessagesContainer>
  </Provider>,
  document.getElementById('root'),
);
