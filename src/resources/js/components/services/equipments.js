import {
  fetchEquipmentsSuccess,
  fetchEquipmentsError,
} from '../actions/equipments';

const fetchEquipments = () => (dispatch) => {
  fetch('/api/get-equipment')
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchEquipmentsSuccess(res.data.equipments));
      return res.data.equipments;
    }).catch((error) => dispatch(fetchEquipmentsError(error)));
};

export default fetchEquipments;
