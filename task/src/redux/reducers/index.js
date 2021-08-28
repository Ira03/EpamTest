import { combineReducers } from 'redux';
import { modeReducer } from './modeReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  listMode: modeReducer,
  products: productsReducer,
});
