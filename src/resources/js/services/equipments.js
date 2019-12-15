import {
  fetchEquipmentsSuccess,
  fetchEquipmentsError,
} from '../redux/actionCreators/equipments';

const fetchEquipmentsService = () => (dispatch) => {
  fetch('/api/get-equipment')
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchEquipmentsSuccess(res.data.equipments));
      return res.data.equipments;
    }).catch((error) => dispatch(fetchEquipmentsError(error)));
};

export default fetchEquipmentsService;
