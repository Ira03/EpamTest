import { ADD_FILTER, REMOVE_FILTER } from '../reducers/filtersReducer';

export const addFilterAction = payload => {
  return {
    type: ADD_FILTER,
    payload,
  };
};

export const removeFilterAction = payload => {
  return {
    type: REMOVE_FILTER,
    payload,
  };
};
