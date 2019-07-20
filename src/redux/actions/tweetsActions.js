import reduxGlossary from '../glossary';

const tweetsActions = {};

tweetsActions.setLoadingStatusTo = (dispatch, bool) => {
  dispatch({
    type: reduxGlossary.actionName.tweet.status,
    payload: bool,
  });
};

tweetsActions.setAnError = (dispatch, errorData) => {
  dispatch({
    type: reduxGlossary.actionName.tweet.error,
    payload: errorData,
  });
};

tweetsActions.updateTweetsData = (dispatch, tweetsData) => {
  dispatch({
    type: reduxGlossary.actionName.tweet.update,
    payload: tweetsData,
  });
};

export default tweetsActions;
