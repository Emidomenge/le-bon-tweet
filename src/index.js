import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/tachyons.min.css';
import './assets/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderNavbar from './components/headerNavbar';
import TweetListContainer from './components/tweetListContainer';
import './index.css';
import configureStore from './redux/store';
import publicTweets from './mockData/publicTweets';
import privateTweets from './mockData/privateTweets';
import Welcome from './components/welcome';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <HeaderNavbar />
      <Route
        exact
        path="/"
        component={() => (
          <Welcome
            isAuthenticated
          />
        )}
      />
      <Route
        exact
        path="/actu"
        component={() => (
          <TweetListContainer
            mockedTweets={publicTweets}
          />
        )}
      />
      <Route
        exact
        path="/secret"
        component={() => (
          <TweetListContainer
            mockedTweets={privateTweets}
          />
        )}
      />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
