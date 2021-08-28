import { useSelector } from 'react-redux';
import './Header.scss';

export const Header = () => {
  const products = useSelector(state => state.products);
  return (
    <header className="header">
      <h1>Смартфоны</h1>
      <span className="header__text">{products.length}</span>
    </header>
  );
};
