import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPriceAction, setMinPriceAction } from '../../redux/actionCreators/price';

export const PriceFilters = () => {
  const minPrice = useSelector(state => state.price.min);
  const maxPrice = useSelector(state => state.price.max);
  const [isClicked, setIsClicked] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="form__item">
      <h2 className="form__title">Цена</h2>
      <button
        type="button"
        className={isClicked ? 'btn-expand' : 'btn-expand active'}
        data-testid="test-btn"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <span className="material-icons">expand_more</span>
      </button>
      {isClicked && (
        <div className="form__container">
          <div className="form__input form__input_min">
            <input
              className="input-text"
              type="text"
              name="min-price"
              value={minPrice}
              onChange={e => {
                dispatch(setMinPriceAction(e.target.value));
              }}
            />
          </div>
          <div className="form__input">
            <input
              className="input-text"
              type="text"
              name="max-price"
              value={maxPrice}
              onChange={e => dispatch(setMaxPriceAction(e.target.value))}
            />
          </div>
        </div>
      )}
    </div>
  );
};
