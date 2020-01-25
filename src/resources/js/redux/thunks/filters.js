import { changeFilters } from '../actions/filters';
import { filterEquipments } from './equipments';

export const applyFiltersToEquipments = (filters) => (dispatch) => {
  dispatch(changeFilters(filters));
  dispatch(filterEquipments());
};

export default applyFiltersToEquipments;
