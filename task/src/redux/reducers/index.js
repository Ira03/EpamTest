import { combineReducers } from 'redux';
import { modeReducer } from './modeReducer';

export const rootReducer = combineReducers({
  listMode: modeReducer,
  // loading: loadingReducer,
});
