import { addProductsAction } from '../actionCreators/products';
import { getProducts } from '../../getProducts';
import { startLoadingAction, stopLoadingAction } from '../actionCreators/loading';

export const fetchProducts = () => {
  return dispatch => {
    dispatch(startLoadingAction());
    getProducts().then(data => {
      dispatch(addProductsAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
