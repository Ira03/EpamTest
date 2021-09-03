export const initState = {
  type: [],
  brand: [],
};

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filtersReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (payload) {
    const { filter, value } = payload;
    switch (type) {
      case ADD_FILTER: {
        return { ...state, [filter]: [...state[filter], value] };
      }
      case REMOVE_FILTER: {
        const filtered = state[filter].filter(item => item !== value);
        return { ...state, [filter]: filtered };
      }
      default:
        return state;
    }
  }
  return state;
};
