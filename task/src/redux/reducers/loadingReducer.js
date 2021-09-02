export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};
