/* eslint-disable no-param-reassign */
import reduxGlossary from '../glossary';

const tweetsReducer = (state = {}, action) => {
  switch (action.type) {
    case reduxGlossary.actionName.tweet.status:
      return {
        ...state,
        isLoading: action.payload,
      };
    case reduxGlossary.actionName.tweet.error:
      return {
        ...state,
        hasError: action.payload,
      };
    case reduxGlossary.actionName.tweet.update:
      return {
        ...state,
        tweetsToDisplay: action.payload,
      };
    default:
      return state;
  }
};

export default tweetsReducer;
