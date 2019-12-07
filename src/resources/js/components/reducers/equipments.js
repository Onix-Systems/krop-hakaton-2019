import initialState from '../store/initialState';
import {
  createAddressLocalityFilter,
  createDiagnosticSubgroupFilter,
  createSearchFilter,
  createDiagnosticTypeFilter,
} from './helpers';
import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_SUCCESS:
      return {
        ...state,
        equipments: {
          ...state.equipments,
          all: action.equipments.slice(),
          filtered: action.equipments.slice(),
        },
        availableFilters: {
          ...state.availableFilters,
          address_locality: createAddressLocalityFilter(action.equipments),
          search: createSearchFilter(action.equipments),
          diagnostic_subgroup: createDiagnosticSubgroupFilter(action.equipments),
          diagnostic_type: createDiagnosticTypeFilter(action.equipments),
        },
      };
    case FETCH_EQUIPMENTS_ERROR:
      return {
        ...state,
        equipments: {
          ...state.equipments,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default equipments;
