import reduxGlossary from '../glossary';

const messageFormAction = () => (dispatch) => {
  dispatch({
    type: reduxGlossary.actionName.messageForm,
    payload: 'hello redux',
  });
};

export default messageFormAction;
