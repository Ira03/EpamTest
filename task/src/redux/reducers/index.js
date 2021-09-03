import { combineReducers } from 'redux';
import { filtersReducer } from './filtersReducer';
import { loadingReducer } from './loadingReducer';
import { modeReducer } from './modeReducer';
import { priceReducer } from './priceReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  listMode: modeReducer,
  products: productsReducer,
  loading: loadingReducer,
  filters: filtersReducer,
  price: priceReducer,
});
