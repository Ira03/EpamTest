import { getProducts } from '../../getProducts';
import { startLoadingAction, stopLoadingAction } from '../actionCreators/loading';
import { setMaxPriceAction, setMinPriceAction } from '../actionCreators/price';
import { addProductsAction } from '../actionCreators/products';

export const fetchProducts = () => {
  return dispatch => {
    dispatch(startLoadingAction());
    getProducts().then(data => {
      const prices = data.map(item => +item.price);
      dispatch(setMinPriceAction(Math.min(...prices)));
      dispatch(setMaxPriceAction(Math.max(...prices)));
      dispatch(addProductsAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
