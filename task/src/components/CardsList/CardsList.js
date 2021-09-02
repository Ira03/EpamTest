import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../Card/Card';

export const CardsList = () => {
  const listMode = useSelector(state => state.listMode);
  const typeFilters = useSelector(state => state.filters.type);
  const brandFilters = useSelector(state => state.filters.brand);
  const minPrice = useSelector(state => state.price.min);
  const maxPrice = useSelector(state => state.price.max);
  const products = useSelector(state => state.products);
  const [list, setList] = useState(products);

  const filterProducts = () => {
    let res = products.slice();
    if (typeFilters.length) {
      res = res.filter(product => typeFilters.some(filter => filter === product.type));
    }
    if (brandFilters.length) {
      res = res.filter(product => brandFilters.some(filter => filter === product.brand));
    }

    res = res.filter(
      product => +product.price >= minPrice.replace(' ', '') && +product.price <= maxPrice.replace(' ', ''),
    );

    return res;
  };

  useEffect(() => {
    setList(filterProducts());
  }, [typeFilters, brandFilters, minPrice, maxPrice]);

  return (
    <div data-testid="cards-list" className={listMode ? 'cards list-mode' : 'cards'}>
      {list.map(item => (
        <Card {...item} key={uuidv4()} />
      ))}
    </div>
  );
};
