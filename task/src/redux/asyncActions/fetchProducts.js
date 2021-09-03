import { getProducts } from '../../getProducts';
import { stopLoadingAction } from '../actionCreators/loading';
import { setMaxPriceAction, setMinPriceAction } from '../actionCreators/price';
import { addProductsAction } from '../actionCreators/products';

export const fetchProducts = () => {
  return dispatch => {
    getProducts().then(data => {
      const prices = data.map(item => +item.price);
      dispatch(setMinPriceAction(String(Math.min(...prices))));
      dispatch(setMaxPriceAction(String(Math.max(...prices))));
      dispatch(addProductsAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
