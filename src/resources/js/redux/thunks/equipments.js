import {
  equipmentsChanged,
  uniqueEquipmentSelected,
  equipmentsNotFound,
  equipmentsFailure,
} from '../actions/equipments';
import { hideLoading, showLoading } from '../actions/loading';
import { createQueryString } from '../../helpers';

export const filterEquipments = (queryString) => async (dispatch) => {
  const query = new URLSearchParams(queryString);
  if (query.has('q') && query.get('q').length < 3) {
    return;
  }

  dispatch(showLoading());
  try {
    const response = await fetch(`/api/search${queryString}`);
    if (response.status === 200) {
      const body = await response.json();
      const {
        current_page,
        last_page,
        per_page,
        qty: total,
        search_result,
      } = body.data;
      dispatch(equipmentsChanged(
        search_result,
        {
          current_page,
          last_page,
          per_page,
          total,
        },
      ));
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
