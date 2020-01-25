import availableFiltersFetched from '../actionCreators/filters';

const fetchAvailableFilters = () => async (dispatch) => {
  try {
    const response = await fetch('/api/filters');
    const body = await response.json();
    return dispatch(availableFiltersFetched(body.data));
  } catch (e) {
    return dispatch(availableFiltersFetched([]));
  }
};

export default fetchAvailableFilters;
