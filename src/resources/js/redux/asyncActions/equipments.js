import equipmentsFiltered from '../actionCreators/equipments';

const filterEquipments = (newFilter, stateFilters) => (dispatch) => {
  const requestFilters = {
    ...stateFilters,
    [newFilter.name]: newFilter.value,
  };

  const query = Object.keys(requestFilters).reduce((accumulator, filter) => {
    const filterValue = requestFilters[filter];
    if (filterValue) {
      accumulator.append(filter, filterValue);
    }
    return accumulator;
  }, new URLSearchParams());

  const queryString = query.keys().next().value
    ? decodeURI(`?${query.toString()}`)
    : '';

  console.log(queryString);

  fetch(`/api/search${queryString}`)
    .then((res) => res.json())
    .then((res) => dispatch(equipmentsFiltered(res.data.search_result, requestFilters)))
    .catch(() => dispatch(equipmentsFiltered([], requestFilters)));
};

export default filterEquipments;
