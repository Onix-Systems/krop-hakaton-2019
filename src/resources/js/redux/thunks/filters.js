import { changeFilter } from '../actions/filters';
import { filterEquipments } from './equipments';

const applyFilterToEquipments = (filterName, filterValue) => (dispatch) => {
  dispatch(changeFilter(filterName, filterValue));
  dispatch(filterEquipments());
};

export default applyFilterToEquipments;
