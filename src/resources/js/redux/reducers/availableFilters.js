import initialState from '../initialState';
import { AVAILABLE_FILTERS_FAILURE, AVAILABLE_FILTERS_FETCHED } from '../actions/availableFilters';
import { mapAvailableFiltersToDropdownProp } from '../../helpers';

const availableFiltersReducer = (state = initialState.availableFilters, action) => {
  switch (action.type) {
    case AVAILABLE_FILTERS_FETCHED:
      return mapAvailableFiltersToDropdownProp(action.availableFilters);
    case AVAILABLE_FILTERS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default availableFiltersReducer;
