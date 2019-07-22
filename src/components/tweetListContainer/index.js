/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TweetContainer from './components/tweetContainer';
import Thumbnail from '../common/thumbnail';
import noTweetsImg from '../../assets/img/no_tweets.svg';
import errorFetchingTweetsImg from '../../assets/img/error.svg';
import TweetLoader from './components/tweetLoader';
import tweetsActions from '../../redux/actions/tweetsActions';
import helper from '../../lib/helper';
import mockData from '../../mockData/other';
import TweetForm from './components/tweetForm';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setLoadingStatusTo: bool => tweetsActions.setLoadingStatusTo(dispatch, bool),
  setAnError: errorData => tweetsActions.setAnError(dispatch, errorData),
  updateTweetsData: tweetsData => tweetsActions.updateTweetsData(dispatch, tweetsData),
});

class TweetListContainer extends Component {
  constructor(props) {
    super(props);
    this.getTweets = this.getTweets.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  componentDidMount() {
    const { tweetsReducer: { tweetsToDisplay } } = this.props;
    if (!tweetsToDisplay) {
      this.getTweets();
    }
  }

  getTweets() {
    const {
      apiSleepTime, apiCodeAnswer, setLoadingStatusTo,
      setAnError, updateTweetsData, mockedTweets,
      userReducer: {
        userInfo: { userId },
      },
    } = this.props;

    const headerParams = {
      token: mockData.jwtToken.token,
      tokenType: mockData.jwtToken.type,
    };

    const fetchInfo = {
      url: 'https://httpstat.us/',
      api: {
        codeAnswer: apiCodeAnswer,
        sleepTime: apiSleepTime,
      },
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
        userId,
        tweetType: 'public',
      },
    };

    const mockedAnwser = { tweets: mockedTweets };

    helper.mockFetchCall(fetchInfo, mockedAnwser,
      (data) => {
        // call redux actions
        setLoadingStatusTo(false);
        updateTweetsData(data.tweets);
      },
      (error) => {
        // call redux actions
        setLoadingStatusTo(false);
        setAnError(error);
      });
  }

  handleDisplay() {
    const {
      tweetsReducer: { tweetsToDisplay, isLoading, hasError },
      tweetFormReducer: { newTweets },
    } = this.props;

    const NoTweets = () => (
      <Thumbnail
        label={"Oops, aucun tweet n'a été trouvé..."}
        image={noTweetsImg}
      />
    );

    const ErrorWhileFetching = () => (
      <Thumbnail
        label="Aïe Aïe Aïe ! Une erreur est survenue, veuillez réessayer ultérieurement"
        image={errorFetchingTweetsImg}
      />
    );

    if (isLoading) {
      return (<TweetLoader />);
    }

    if (hasError) {
      return (<ErrorWhileFetching />);
    }

    const createTweets = tweetsArr => tweetsArr.map((tweet, index) => (
      <TweetContainer
        key={tweet.id + index}
        text={tweet.text}
        author={tweet.createdByUser.fullName}
        authorImage={tweet.createdByUser.picture}
        creationDate={tweet.createdAt}
        restrictedTo={tweet.restrictedTo}
      />
    ));

    const displayAllTweets = () => {
      const tweetsFromServer = createTweets(tweetsToDisplay);
      const newTweetsSubmitted = createTweets(newTweets);
      return newTweetsSubmitted.concat(tweetsFromServer);
    };

    return tweetsToDisplay && tweetsToDisplay.length !== 0
      ? displayAllTweets() : <NoTweets />;
  }

  render() {
    const { tweetsReducer: { isLoading, hasError } } = this.props;
    return (
      <Container className="mt2">
        {!isLoading && !hasError && <TweetForm />}
        {this.handleDisplay()}
      </Container>
    );
  }
}

TweetListContainer.propTypes = {
  // BEGIN: Test API props
  apiSleepTime: PropTypes.number,
  apiCodeAnswer: PropTypes.number,
  mockedTweets: PropTypes.arrayOf(PropTypes.any),
  // END: Test API props
  // BEGIN: Redux props
  setLoadingStatusTo: PropTypes.func.isRequired,
  setAnError: PropTypes.func.isRequired,
  updateTweetsData: PropTypes.func.isRequired,
  userReducer: PropTypes.shape().isRequired,
  tweetsReducer: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.any,
    tweetsToDisplay: PropTypes.arrayOf(
      PropTypes.shape(
        {
          text: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          restrictedTo: PropTypes.arrayOf(
            PropTypes.string,
          ).isRequired,
          createdByUser: PropTypes.shape(
            {
              id: PropTypes.string.isRequired,
              fullName: PropTypes.string.isRequired,
              picture: PropTypes.string.isRequired,
            },
          ).isRequired,
        },
      ),
    ),
  }).isRequired,
  // END: Redux props
};

TweetListContainer.defaultProps = {
  apiSleepTime: 500,
  apiCodeAnswer: 200,
  mockedTweets: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer);
