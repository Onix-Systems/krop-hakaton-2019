import initialState from '../initialState';
import FETCH_AVAILABLE_FILTERS from '../actionTypes/filters';

const mapFilters = (filters) => Object.keys(filters).reduce((result, filter) => ({
  ...result,
  [filter]: filters[filter].map((value) => ({
    text: value,
    value,
    selected: false,
  })),
}), {});

const filtersReducer = (state = initialState, action) => {
  if (action.type === FETCH_AVAILABLE_FILTERS) {
    return {
      ...state,
      availableFilters: mapFilters(action.availableFilters),
    };
  }
  return state;
};

export default filtersReducer;
