import { combineReducers } from 'redux';

const appReducer = combineReducers({
  test: 'test'
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
