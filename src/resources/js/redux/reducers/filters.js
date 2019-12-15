import initialState from '../initialState';
import FILTER_EQUIPMENTS from '../actionTypes/filters';

const filters = (state = initialState, action) => {
  if (action.type === FILTER_EQUIPMENTS) {
    let currentFilter = {};
    switch(action.filterType) {
      case 'address_locality':
        currentFilter = { address_locality: action.value };
        break;
      case 'diagnostic_subgroup':
        currentFilter = { diagnostic_subgroup: action.value };
        break;
      case 'diagnostic_type':
        currentFilter = { diagnostic_type: action.value };
        break;
      case 'work_shedule':
        currentFilter = { work_shedule: action.value };
        break;
      case 'search':
        console.log('search');
        currentFilter = { search: action.value };
        break;
    };
    return {
      ...state,
      equipments: {
        ...state.equipments,
        filtered: state.equipments.all.filter((equipment) => {
          return (
            (!currentFilter.address_locality || currentFilter.address_locality === equipment.address_locality)
            &&
            (!currentFilter.diagnostic_subgroup || currentFilter.diagnostic_subgroup === equipment.diagnostic_subgroup)
            &&
            (!currentFilter.diagnostic_type || currentFilter.diagnostic_type === equipment.diagnostic_type)
            &&
            (!currentFilter.work_shedule || currentFilter.work_shedule === equipment.work_shedule)
            &&
            (!currentFilter.search || (currentFilter.search === equipment.custodian_name || currentFilter.search === equipment.diagnostic_type))
          );
        }),
      },
      filters: {
        ...state.filters,
        ...currentFilter,
      },
    };
  }
  return state;
};

export default filters;
