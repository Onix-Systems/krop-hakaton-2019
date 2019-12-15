import FETCH_AVAILABLE_FILTERS from '../actionTypes/filters';

const availableFiltersFetched = (availableFilters) => ({
  type: FETCH_AVAILABLE_FILTERS,
  availableFilters,
});

export default availableFiltersFetched;
