import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Button } from './Button';

describe('Button', () => {
  it('add to cart', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Button />
      </Provider>,
    );
    const btn = getByRole('button');
    expect(btn).not.toHaveClass('card__btn clicked');
    userEvent.click(btn);
    expect(btn).toHaveClass('card__btn clicked');
  });
});
