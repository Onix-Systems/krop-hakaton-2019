import FILTER_EQUIPMENTS from '../actionTypes/equipments';

const equipmentsFiltered = (equipments, filters) => ({
  type: FILTER_EQUIPMENTS,
  equipments,
  filters,
});

export default equipmentsFiltered;
