export const SET_MIN_PRICE = 'SET_MIN_PRICE';
export const SET_MAX_PRICE = 'SET_MAX_PRICE';

export const setMinPriceAction = payload => {
  return {
    type: SET_MIN_PRICE,
    payload,
  };
};

export const setMaxPriceAction = payload => {
  return {
    type: SET_MAX_PRICE,
    payload,
  };
};
