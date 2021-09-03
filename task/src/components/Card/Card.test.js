import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Card } from './Card';
import { setModeAction } from '../../redux/actionCreators/mode';

describe('Card', () => {
  const { queryByText, getByAltText } = render(
    <Provider store={store}>
      <Card
        image="image"
        title="title"
        description={{ screen: '', tech: '', process: '', memory: '', camera: '' }}
        price="100"
      />
    </Provider>,
  );
  it('render card component with props', () => {
    expect(queryByText(/title/i)).toBeInTheDocument();
    expect(queryByText(/100/i)).toBeInTheDocument();
    expect(getByAltText(/title/i)).toBeInTheDocument();
  });

  it('add description block to the card', async () => {
    const { findByRole } = render(
      <Provider store={store}>
        <Card
          image="image"
          title="title"
          description={{ screen: '', tech: '', process: '', memory: '', camera: '' }}
          price="100"
        />
      </Provider>,
    );
    store.dispatch(setModeAction(true));
    expect(await findByRole('list')).toBeInTheDocument();
  });
});
