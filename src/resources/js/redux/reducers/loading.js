import initialState from '../initialState';
import { HIDE_LOADING, SHOW_LOADING } from '../actions/loading';

const loadingReducer = (state = initialState.loading, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
