import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageFormReducer from './reducers/messageFormReducer';
import tweetsReducer from './reducers/tweetsReducer';

const initState = {
  tweetsReducer: {
    tweetsToDisplay: [],
  },
};

export default function configureStore(initialState = initState) {
  return createStore(
    combineReducers({
      messageFormReducer,
      tweetsReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
}
