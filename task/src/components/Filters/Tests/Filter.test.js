import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { Filter } from '../Filter';
describe('Filter', () => {
  it('checkbox click', () => {
    const { getByRole, queryAllByText } = render(
      <Provider store={store}>
        <Filter value="smartphone" label="Apple" type="type" />
      </Provider>,
    );
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    store.getState().filters.type.length !== 0;
    userEvent.click(checkbox);
    store.getState().filters.type.length === 0;
  });
});
