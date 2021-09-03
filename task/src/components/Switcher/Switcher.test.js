import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Switcher } from './Switcher';

describe('Switcher', () => {
  it('renders switcher component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Switcher />
      </Provider>,
    );
    const switcher = getByRole('checkbox');
    expect(switcher).not.toBeChecked();
    userEvent.click(switcher);
    expect(switcher).toBeChecked();
  });
});
