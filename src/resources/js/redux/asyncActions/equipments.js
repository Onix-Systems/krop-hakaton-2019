import { equipmentsFiltered, fetchingEquipments } from '../actionCreators/equipments'

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

  dispatch(fetchingEquipments());
  fetch(`/api/search${queryString}`)
    .then((res) => res.json())
    .then((res) => dispatch(equipmentsFiltered(res.data.search_result, requestFilters)))
    .catch(() => dispatch(equipmentsFiltered([], requestFilters)));
};

const fetchEquipments = () => async (dispatch, getState) => {
  console.log('fetchEquipments');
  const {filters} = getState();
  console.log(filters);
  try {
    dispatch(fetchingEquipments());
    const response = await fetch('/api/get-equipment');
    const body = await response.json();
    dispatch(equipmentsFiltered(body.data.equipments, filters));
  } catch (e) {
    dispatch(equipmentsFiltered([], filters));
  }
};

export {
  fetchEquipments,
  filterEquipments,
};
