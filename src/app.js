import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderNavbar from './components/headerNavbar';
import publicTweets from './mockData/publicTweets';
import privateTweets from './mockData/privateTweets';
import Welcome from './components/welcome';
import TweetListContainer from './components/tweetListContainer';
import other from './mockData/other';
import userActions from './redux/actions/userAction';
import serverAnswer from './mockData/serverAnswer';
import helper from './lib/helper';
import Loader from './components/common/loader';
import initialState from './redux/initialState';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  auth: userData => userActions.auth(dispatch, userData),
  setLoadingStatusTo: bool => userActions.setLoadingStatusTo(dispatch, bool),
});

class App extends Component {
  static getJwtToken() {
    return window.localStorage.getItem('jwtToken');
  }

  constructor(props) {
    super(props);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    // BEGIN: Static behaviour
    window.localStorage.setItem('jwtToken', other.jwtToken);
    // END: Static behaviour


    const jwtToken = App.getJwtToken();
    if (jwtToken) {
      this.getUserInfo(jwtToken);
    } else {
      console.log('not found');
    }
  }

  getUserInfo(jwtToken) {
    const { auth, setLoadingStatusTo } = this.props;
    const headerParams = {
      token: jwtToken.token,
      tokenType: jwtToken.type,
    };

    const fetchInfo = {
      header: {
        method: 'GET',
        withCredentials: true,
        // credentials: 'include', // in comment to AVOID CORS issues
        headers: {
          Authorization: `${headerParams.tokenType} ${headerParams.token}`,
          'Content-Type': 'application/json',
        },
      },
      requestParams: {
        getUserInfos: '*',
      },
    };

    const mockedAnwser = serverAnswer.authenticatedUserInfo;

    helper.mockFetchCall(fetchInfo, mockedAnwser,
      (data) => {
        // call redux actions
        auth(data);
        setLoadingStatusTo(false);
      },
      (/* error */) => {
        // TODO: later....
      });
  }

  render() {
    const { userReducer: { isLoading, userInfo } } = this.props;

    if (isLoading) {
      return (
        <div className="w-100">
          <Loader
            bodyClass="vh-100"
          />
        </div>
      );
    }

    return (
      <div>
        <HeaderNavbar />
        <Route
          exact
          path="/"
          component={() => (
            <Welcome
              userInfo={userInfo.personalData}
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
      </div>
    );
  }
}

App.propTypes = {
  // BEGIN: Redux props
  userReducer: PropTypes.shape(),
  auth: PropTypes.func.isRequired,
  setLoadingStatusTo: PropTypes.func.isRequired,
  // END: Redux props
};

App.defaultProps = {
  userReducer: initialState.userReducer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
