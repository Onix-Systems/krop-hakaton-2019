import initialState from '../initialState';
import { TOGGLE_MAP } from '../actions/map';

const mapReducer = (state = initialState.map, action) => {
  switch (action.type) {
    case TOGGLE_MAP:
      return !state;
    default:
      return state;
  }
};

export default mapReducer;
