import tweetFormReducer from './reducers/tweetFormReducer';

export default {
  tweetsReducer: {
    tweetsToDisplay: null,
    isLoading: true,
    hasError: null,
  },
  userReducer: {
    userInfo: null,
    isLoading: true,
  },
  tweetFormReducer: {
    newTweets: [],
    isLoading: false,
    error: null,
  },
};
