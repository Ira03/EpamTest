import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { BrandFilters } from '../BrandFilters';
describe('BrandFilters', () => {
  it('show more filters', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrandFilters />
      </Provider>,
    );
    const btn = getByTestId('btn-show');
    expect(btn).toHaveTextContent('Показать еще');
    userEvent.click(btn);
    expect(btn).toHaveTextContent('Скрыть');
  });
});
