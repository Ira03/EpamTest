import { addFilterAction, removeFilterAction } from '../actionCreators/filters';
import { startLoadingAction, stopLoadingAction } from '../actionCreators/loading';
import { setModeAction } from '../actionCreators/mode';
import { setMaxPriceAction, setMinPriceAction } from '../actionCreators/price';
import { addProductsAction } from '../actionCreators/products';
import { store } from '../store';

describe('Redux testing', () => {
  it('checks initial listMode is equal to false', () => {
    const { listMode } = store.getState();
    expect(listMode).toBe(false);
  });

  it('checks initial price', () => {
    const minPrice = store.getState().price.min;
    const maxPrice = store.getState().price.max;
    expect(maxPrice).toBe('');
    expect(minPrice).toBe('');
  });
  it('checks initial products list', () => {
    const { products } = store.getState();
    expect(products).toStrictEqual([]);
  });
  it('checks initial loading is equal to false', () => {
    const { loading } = store.getState();
    expect(loading).toBe(true);
  });
  it('checks initial filters', () => {
    const { filters } = store.getState();
    expect(filters).toStrictEqual({ type: [], brand: [] });
  });
  it('toggle listMode', () => {
    store.dispatch(setModeAction(true));
    const { listMode } = store.getState();
    expect(listMode).toBe(true);
  });
  it('set price', () => {
    store.dispatch(setMinPriceAction(100));
    store.dispatch(setMaxPriceAction(200));
    const { price } = store.getState();
    expect(price).toStrictEqual({ min: 100, max: 200 });
  });
  it('add filters', () => {
    store.dispatch(addFilterAction({ filter: 'brand', value: 'apple' }));
    store.dispatch(addFilterAction({ filter: 'type', value: 'smartphone' }));
    store.dispatch(removeFilterAction({ filter: 'brand', value: 'apple' }));
    const { filters } = store.getState();
    expect(filters).toStrictEqual({ type: ['smartphone'], brand: [] });
  });
  it('add products', () => {
    store.dispatch(
      addProductsAction([
        { product: 1, price: 2 },
        { product: 2, price: 2 },
      ]),
    );
    const { products } = store.getState();
    expect(products).toStrictEqual([
      { product: 1, price: 2 },
      { product: 2, price: 2 },
    ]);
  });
  it('checks start loading', () => {
    store.dispatch(startLoadingAction());
    const { loading } = store.getState();
    expect(loading).toBe(true);
  });
  it('checks stop loading', () => {
    store.dispatch(stopLoadingAction());
    const { loading } = store.getState();
    expect(loading).toBe(false);
  });
});
