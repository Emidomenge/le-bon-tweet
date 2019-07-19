import reduxGlossary from '../glossary';


const messageFormReducer = (state = { }, action) => {
  switch (action.type) {
    case reduxGlossary.actionName.messageForm:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default messageFormReducer;
