import { useSelector } from 'react-redux';
import { CardsList } from '../CardsList/CardsList';
import { Switcher } from '../Switcher/Switcher';

export const CardsBlock = () => {
  const products = useSelector(state => state.products);
  return (
    <div className="main__column">
      <Switcher />
      <CardsList products={products} />
    </div>
  );
};
