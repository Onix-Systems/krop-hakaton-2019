import {
  equipmentsChanged,
  uniqueEquipmentSelected,
  equipmentsNotFound,
  equipmentsFailure,
} from '../actions/equipments';
import { hideLoading, showLoading } from '../actions/loading';
import { createQueryString } from '../../helpers';

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
  const queryString = createQueryString(filters);

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

export const fetchUniqueEquipment = (hash) => async (dispatch) => {
  const queryString = createQueryString({ id_u: hash });

  dispatch(showLoading());
  try {
    const response = await fetch(`/api/search${queryString}`);
    if (response.status === 200) {
      const body = await response.json();
      dispatch(uniqueEquipmentSelected(body.data.search_result[0]));
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
