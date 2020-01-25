import initialState from '../initialState';
import { CHANGE_FILTER } from '../actions/filters';

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default filtersReducer;
