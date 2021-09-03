import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { FiltersBlock } from '../FiltersBlock';
describe('FiltersBlock', () => {
  it('show brand filters', () => {
    const { getAllByTestId, queryAllByRole } = render(
      <Provider store={store}>
        <FiltersBlock />
      </Provider>,
    );
    const btns = getAllByTestId('test-btn');
    const checkboxes = queryAllByRole('checkbox');
    checkboxes.forEach(item => expect(item).toBeInTheDocument());
    btns.forEach(btn => userEvent.click(btn));
    const checkboxes2 = queryAllByRole('checkbox');
    checkboxes2.forEach(item => expect(item).toBeNull());
  });
});
