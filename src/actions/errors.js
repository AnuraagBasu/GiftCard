export const SET_ERROR = 'SET_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const dispatchError = error => ({
  type: SET_ERROR,
  error
});
export const removeError = () => ({
  type: REMOVE_ERROR
});
