import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Card } from './Card';

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
    //   expect(store.getState().listMode).toBe(false);
    //   store.dispatch(setModeAction(true));
    //   expect(store.getState().listMode).toBe(true);
    //   expect(queryByTestId('list')).toBeInTheDocument();
    // expect(queryByTestId('list')).toBeNull();
    // await store.dispatch(setModeAction(true));
    // });
  });
});
