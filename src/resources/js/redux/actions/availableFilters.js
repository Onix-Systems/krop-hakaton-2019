export const AVAILABLE_FILTERS_FETCHED = 'AVAILABLE_FILTERS_FETCHED';
export const AVAILABLE_FILTERS_FAILURE = 'AVAILABLE_FILTERS_FAILURE';

export const availableFiltersFetched = (availableFilters) => ({
  type: AVAILABLE_FILTERS_FETCHED,
  availableFilters,
});

export const availableFiltersFailure = () => ({
  type: AVAILABLE_FILTERS_FAILURE,
});
