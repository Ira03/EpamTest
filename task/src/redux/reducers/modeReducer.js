export const SET_LIST_MODE = 'SET_LIST_MODE';

const initialState = false;

export const modeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LIST_MODE:
      return payload;
    default:
      return state;
  }
};
