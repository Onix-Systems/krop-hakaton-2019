import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';

const fetchEquipmentsSuccess = (equipments) => ({
  type: FETCH_EQUIPMENTS_SUCCESS,
  equipments,
});

const fetchEquipmentsError = (error) => ({
  type: FETCH_EQUIPMENTS_ERROR,
  error,
});

export {
  fetchEquipmentsSuccess,
  fetchEquipmentsError,
};
