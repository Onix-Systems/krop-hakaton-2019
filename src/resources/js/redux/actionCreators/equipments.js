import { FETCHING_EQUIPMENTS, FILTER_EQUIPMENTS } from '../actionTypes/equipments';

const fetchingEquipments = () => {
  console.log('fetchingEquipments action creators')
  return ({
    type: FETCHING_EQUIPMENTS,
  });
};

const equipmentsFiltered = (equipments, filters) => ({
  type: FILTER_EQUIPMENTS,
  equipments,
  filters,
});

export {
  fetchingEquipments,
  equipmentsFiltered,
};
