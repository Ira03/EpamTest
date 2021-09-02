import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { PriceFilters } from '../PriceFilters';
describe('PriceFilters', () => {
  it('show prices in inputs', () => {
    const { getAllByRole, queryAllByText } = render(
      <Provider store={store}>
        <PriceFilters />
      </Provider>,
    );
    const texts = queryAllByText('/test/i');
    const inputs = getAllByRole('textbox');
    texts.forEach(text => expect(text).toBeNull());
    inputs.forEach(input => userEvent.type(input, 'test'));
    texts.forEach(text => expect(text).toBeInTheDocument());
  });
});
