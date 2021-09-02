import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { App } from '../App';
describe('CardList', () => {
  const { queryByText, getByAltText, queryByTestId, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  it('filter items', async () => {});
});

// {
//   brand: 'apple',
//   type: 'smartphone',
//   image: 'test',
//   title: 'test',
//   description: { screen: '', tech: '', process: '', memory: '', camera: '' },
//   price: '100000',
// },
// {
//   brand: 'apple',
//   type: 'iphone',
//   image: 'test',
//   title: 'test',
//   description: { screen: '', tech: '', process: '', memory: '', camera: '' },
//   price: '100000',
// },
