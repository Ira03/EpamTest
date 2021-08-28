import { ADD_PRODUCTS } from '../reducers/productsReducer';

export const addProductsAction = payload => ({
  type: ADD_PRODUCTS,
  payload,
});
