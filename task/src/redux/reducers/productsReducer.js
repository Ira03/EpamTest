export const ADD_PRODUCTS = 'ADD_PRODUCTS';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCTS:
      return [...state, ...payload];
    default:
      return state;
  }
};
