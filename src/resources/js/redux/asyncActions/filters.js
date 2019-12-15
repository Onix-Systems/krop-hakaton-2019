import availableFiltersFetched from '../actionCreators/filters';

const fetchAvailableFilters = () => (dispatch) => {
  fetch('/api/filters')
    .then((res) => res.json())
    .then((res) => dispatch(availableFiltersFetched(res.data)))
    .catch(() => dispatch(availableFiltersFetched([])));
};

export default fetchAvailableFilters;
