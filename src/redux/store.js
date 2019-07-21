import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageFormReducer from './reducers/messageFormReducer';
import tweetsReducer from './reducers/tweetsReducer';
import userReducer from './reducers/userReducer';
import initState from './initialState';

export default function configureStore(initialState = initState) {
  return createStore(
    combineReducers({
      messageFormReducer,
      tweetsReducer,
      userReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
}
