import { availableFiltersFailure, availableFiltersFetched } from '../actions/availableFilters';

const fetchAvailableFilters = () => async (dispatch) => {
  try {
    const response = await fetch('/api/filters');
    const body = await response.json();
    dispatch(availableFiltersFetched(body.data));
  } catch (e) {
    dispatch(availableFiltersFailure());
  }
};

export default fetchAvailableFilters;
