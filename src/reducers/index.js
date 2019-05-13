import { combineReducers } from 'redux';

import {
  VERIFICATION_IN_PROGRESS,
  RESET_VERIFICATION_IN_PROGRESS,
  SET_VERIFIED_DETAILS,
  SET_ERROR
} from '../actions';

const appReducer = combineReducers({
  isVerificationInProgress: (state = false, action) => {
    switch (action.type) {
      case VERIFICATION_IN_PROGRESS:
        return true;
      case RESET_VERIFICATION_IN_PROGRESS:
        return false;
      default:
        return state;
    }
  },
  verifiedDetails: (state = null, action) => {
    switch (action.type) {
      case SET_VERIFIED_DETAILS:
        return action.details;
      default:
        return state;
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case SET_ERROR:
        return action.error;
      default:
        return state;
    }
  }
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
