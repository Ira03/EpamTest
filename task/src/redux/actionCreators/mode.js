import { SET_LIST_MODE } from '../reducers/modeReducer';

export const setModeAction = payload => ({
  type: SET_LIST_MODE,
  payload,
});
