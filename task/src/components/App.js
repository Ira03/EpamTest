import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/asyncActions/fetchProducts';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { FiltersBlock } from './Filters/FiltersBlock';
import { Header } from './Header/Header';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__block">
          <FiltersBlock />
          <CardsBlock />
        </div>
      </main>
    </div>
  );
};
