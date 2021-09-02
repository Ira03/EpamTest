import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './redux/store';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Смартфоны/i)).toBeInTheDocument();
    screen.debug();
  });
});
