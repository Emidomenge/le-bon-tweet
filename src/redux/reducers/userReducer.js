/* eslint-disable no-param-reassign */
import reduxGlossary from '../glossary';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case reduxGlossary.actionName.user.auth:
      return {
        ...state,
        userInfo: action.payload,
      };
    case reduxGlossary.actionName.user.status:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
