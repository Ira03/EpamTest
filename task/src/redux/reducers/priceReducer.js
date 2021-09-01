export const SET_MIN_PRICE = 'SET_MIN_PRICE';
export const SET_MAX_PRICE = 'SET_MAX_PRICE';

const initialState = { min: 0, max: 0 };

export const priceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MIN_PRICE:
      return { ...state, min: payload };
    case SET_MAX_PRICE:
      return { ...state, max: payload };
    default:
      return state;
  }
};
