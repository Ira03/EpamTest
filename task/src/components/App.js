import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/asyncActions/fetchProducts';
import { CardsBlock } from './CardsBlock/CardsBlock';
import { FiltersBlock } from './Filters/FiltersBlock';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      {isLoading || (
        <main className="main">
          <div className="main__block">
            <FiltersBlock />
            <CardsBlock />
          </div>
        </main>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
