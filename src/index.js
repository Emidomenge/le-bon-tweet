import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/tachyons.min.css';
import './assets/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import configureStore from './redux/store';
import App from './app';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
