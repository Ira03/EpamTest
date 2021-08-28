import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card';

export const CardsList = ({ products }) => {
  const listMode = useSelector(state => state.listMode);
  return (
    <div className={listMode ? 'cards list-mode' : 'cards'}>
      {products.map(item => (
        <Card {...item} key={uuidv4()} />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  products: PropTypes.array.isRequired,
};
