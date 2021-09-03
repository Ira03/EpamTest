import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import 'normalize.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './redux/store';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />;
  </Provider>,
  document.getElementById('root'),
);
