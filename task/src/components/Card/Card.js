import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Options } from '../Options/Options';

export const Card = props => {
  const listMode = useSelector(state => state.listMode);
  const { image, title, description, price } = props;

  return (
    <div data-testid="card" className="cards__column">
      <div className="card">
        <div className="card__image">
          <img src={image} alt={title} width="145" height="200" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          {listMode && <Options {...description} data-testid="list" />}
        </div>
        <div className="card__container">
          <span className="card__price">{`${Number(price).toLocaleString()} ₽`}</span>
          <Button />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
};
