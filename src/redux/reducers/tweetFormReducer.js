import reduxGlossary from '../glossary';

const tweetFormReducer = (state = {}, action) => {
  switch (action.type) {
    case reduxGlossary.actionName.tweetForm.status:
      return {
        ...state,
        isLoading: action.payload,
      };
    case reduxGlossary.actionName.tweetForm.submit:
      const newState = state;
      newState.newTweets.push(action.payload);
      return {
        ...newState,
      };
    default:
      return state;
  }
};

export default tweetFormReducer;
