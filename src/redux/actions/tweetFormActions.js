import reduxGlossary from '../glossary';

const tweetFormActions = {};

tweetFormActions.setLoadingStatusTo = (dispatch, bool) => {
  dispatch({
    type: reduxGlossary.actionName.tweetForm.status,
    payload: bool,
  });
};

tweetFormActions.submit = (dispatch, submitData) => {
  dispatch({
    type: reduxGlossary.actionName.tweetForm.submit,
    payload: submitData,
  });
};

export default tweetFormActions;
