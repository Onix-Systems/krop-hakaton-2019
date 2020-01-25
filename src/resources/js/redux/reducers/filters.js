import initialState from '../initialState';
import { CHANGE_FILTERS } from '../actions/filters';

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return Object.keys(action.filters).reduce((accumulator, filter) => ({
        ...accumulator,
        [filter]: action.filters[filter],
      }), { ...state });
    default:
      return state;
  }
};

export default filtersReducer;
