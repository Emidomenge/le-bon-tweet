import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mockTweets from '../mockData/tweets';
import messageFormReducer from './reducers/messageFormReducer';

export default function configureStore(initialState = { messageFormReducer: mockTweets }) {
  return createStore(
    combineReducers({
      messageFormReducer,
    }),
    initialState,
    applyMiddleware(thunk, logger),
  );
}
