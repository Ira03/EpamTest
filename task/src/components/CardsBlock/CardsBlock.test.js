import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { addProductsAction } from '../../redux/actionCreators/products';
import { store } from '../../redux/store';
import { CardsBlock } from './CardsBlock';

describe('CardsBlock', () => {
  const { queryByText, getByAltText, queryByTestId, getByTestId } = render(
    <Provider store={store}>
      <CardsBlock />
    </Provider>,
  );
  it('renders cardsList', async () => {
    store.dispatch(
      addProductsAction([
        {
          type: 'test',
          brand: 'test',
          image: 'test',
          title: 'test',
          description: { screen: '', tech: '', process: '', memory: '', camera: '' },
          price: '100000',
        },
        {
          brand: 'apple',
          type: 'smartphone',
          image: 'test',
          title: 'test',
          description: { screen: '', tech: '', process: '', memory: '', camera: '' },
          price: '100000',
        },
      ]),
    );
    expect(queryByTestId('cards-list')).toBeInTheDocument();
  });
});
