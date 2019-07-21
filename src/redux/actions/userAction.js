import reduxGlossary from '../glossary';
import tweetsActions from "./tweetsActions";

const userActions = {};

userActions.auth = (dispatch, userData) => {
  dispatch({
    type: reduxGlossary.actionName.user.auth,
    payload: userData,
  });
};

userActions.setLoadingStatusTo = (dispatch, bool) => {
  dispatch({
    type: reduxGlossary.actionName.user.status,
    payload: bool,
  });
};

export default userActions;
