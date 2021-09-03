import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterAction, removeFilterAction } from '../../redux/actionCreators/filters';

export const Filter = props => {
  const { value, label, type } = props;
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState(0);
  const products = useSelector(state => state.products);
  const typeFilters = useSelector(state => state.filters.type);
  const brandFilters = useSelector(state => state.filters.brand);

  const updateFilters = () => {
    if (isChecked) {
      dispatch(
        addFilterAction({
          filter: type,
          value,
        }),
      );
    } else if (typeFilters.length || brandFilters.length) {
      dispatch(removeFilterAction({ filter: type, value }));
    }
  };

  useEffect(() => {
    setAmount(products.filter(item => item[type] === value).length);
  }, [products]);

  useEffect(() => {
    updateFilters();
  }, [isChecked]);

  return (
    <div className="form__input">
      <input
        className="custom-checkbox"
        type="checkbox"
        id={value}
        name={type}
        value={value}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor={value}>{label || value}</label>
      <span className="form__text">{amount}</span>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};
