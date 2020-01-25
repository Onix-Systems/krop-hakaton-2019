import { equipmentsChanged, equipmentsNotFound, equipmentsFailure } from '../actions/equipments';
import { hideLoading, showLoading } from '../actions/loading';

export const fetchEquipments = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const response = await fetch('/api/get-equipment');
    if (response.status === 200) {
      const body = await response.json();
      dispatch(equipmentsChanged(body.data.equipments));
    } else if (response.status === 404) {
      dispatch(equipmentsNotFound());
    } else {
      dispatch(equipmentsFailure());
    }
  } catch (e) {
    dispatch(equipmentsFailure());
  } finally {
    dispatch(hideLoading());
  }
};

export const filterEquipments = () => async (dispatch, getState) => {
  const { filters } = getState();

  const query = Object.keys(filters).reduce((accumulator, filter) => {
    const filterValue = filters[filter];
    if (filterValue) {
      accumulator.append(filter, filterValue);
    }
    return accumulator;
  }, new URLSearchParams());

  const queryString = query.keys().next().value
    ? decodeURI(`?${query.toString()}`)
    : '';

  dispatch(showLoading());
  try {
    const response = await fetch(`/api/search${queryString}`);
    if (response.status === 200) {
      const body = await response.json();
      dispatch(equipmentsChanged(body.data.search_result));
    } else if (response.status === 404) {
      dispatch(equipmentsNotFound());
    } else {
      dispatch(equipmentsFailure());
    }
  } catch (e) {
    dispatch(equipmentsFailure());
  } finally {
    dispatch(hideLoading());
  }
};
