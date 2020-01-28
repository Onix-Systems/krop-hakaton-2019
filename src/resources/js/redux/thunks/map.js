import { fetchUniqueEquipment } from './equipments';
import { toggleMap } from '../actions/map';

export const showOnMap = (hash) => async (dispatch) => {
  dispatch(fetchUniqueEquipment(hash));
  dispatch(toggleMap());
};
