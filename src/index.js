import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/tachyons.min.css';
import './assets/css/bootstrap.min.css';
import HeaderNavbar from './components/headerNavbar';
import Body from './components/bodyContainer';
import './index.css';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <HeaderNavbar />
    <Body />
  </Provider>,
  document.getElementById('root'),
);
