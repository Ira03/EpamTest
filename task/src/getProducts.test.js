import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { setMinPriceAction, setMaxPriceAction } from './redux/actionCreators/price';
import { addProductsAction } from './redux/actionCreators/products';
import { stopLoadingAction } from './redux/actionCreators/loading';
import { App } from './components/App';

const products = [
  {
    brand: 'apple',
    description: {
      camera: '12/12',
      memory: '128 ГБ',
      processor: 'A14 Bionic',
      screen: "6.5''/1080x2400 Пикс",
      tech: 'OLED',
    },
    image: 'https://content2.onliner.by/catalog/device/main/e2189f90f9088975c553ec33431fc186.jpeg',
    price: '88858',
    title: 'Смартфон Apple iPhone 11 64GB (черный)',
    type: 'iPhone',
  },
  {
    brand: 'honor',
    description: {
      camera: '12/12',
      memory: '128 ГБ',
      processor: 'A14 Bionic',
      screen: "6.5''/1080x2400 Пикс",
      tech: 'OLED',
    },
    image: 'https://content2.onliner.by/catalog/device/main/050a6f0f727e91c7d6fb306dfce40a25.jpeg',
    price: '99999',
    title: 'HONOR 10X Lite DNN-LX9 (черный)',
    type: 'smartphone',
  },
];

const mockJsonPromise = Promise.resolve({ data: { products }, res: 'ok' });
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('App', () => {
  it('fetches products from api', async () => {
    const res = await fetch('url');
    const json = await res.json();
    expect(json).toEqual({ data: { products }, res: 'ok' });
    const items = json.data.products;
    expect(items).toEqual(products);
  });
});
