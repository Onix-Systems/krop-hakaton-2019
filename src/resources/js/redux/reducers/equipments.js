import initialState from '../initialState';
import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_SUCCESS:
      const {
        addressLocality,
        searchFilter,
        diagnosticSubgroup,
        diagnosticTypes,
        workShedule,
      } = createFilters(action.equipments);
      return {
        ...state,
        equipments: {
          ...state.equipments,
          all: action.equipments.slice(),
          filtered: action.equipments.slice(),
        },
        availableFilters: {
          ...state.availableFilters,
          address_locality: addressLocality,
          search: searchFilter,
          diagnostic_subgroup: diagnosticSubgroup,
          diagnostic_type: diagnosticTypes,
          work_shedule: workShedule,
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

const createFilters = (equipments) => {
  const result = equipments.reduce((accumulator, equipment, i) => {
    let {
      address_locality,
      custodian_name,
      diagnostic_subgroup,
      diagnostic_type,
      work_shedule
    } = equipment;
    address_locality = address_locality.trim();
    custodian_name = custodian_name.trim();
    diagnostic_subgroup = diagnostic_subgroup.trim();
    diagnostic_type = diagnostic_type.trim();
    work_shedule = work_shedule.trim();
    let schedule = {
      ...accumulator.workShedule,
    };
    if (work_shedule !== 'null') {
      schedule = {
        ...schedule,
        [work_shedule]: {
          text: work_shedule,
          value: work_shedule,
          selected: false,
        },
      };
    }
    return {
      addressLocality: {
        ...accumulator.addressLocality,
        [address_locality]: {
          text: address_locality,
          value: address_locality,
          selected: false,
        },
      },
      searchFilter: {
        ...accumulator.searchFilter,
        [custodian_name]: {
          text: custodian_name,
          value: custodian_name,
          selected: false,
        },
      },
      diagnosticSubgroup: {
        ...accumulator.diagnosticSubgroup,
        [diagnostic_subgroup]: {
          text: diagnostic_subgroup,
          value: diagnostic_subgroup,
          selected: false,
        },
      },
      diagnosticTypes: {
        ...accumulator.diagnosticTypes,
        [diagnostic_type]: {
          text: diagnostic_type,
          value: diagnostic_type,
          selected: false,
        },
      },
      workShedule: schedule,
    };
  }, {
    addressLocality: {},
    searchFilter: {},
    diagnosticSubgroup: {},
    diagnosticTypes: {},
    workShedule: {},
  });
  result.addressLocality = Object.values(result.addressLocality);
  result.searchFilter = Object.values(result.searchFilter);
  result.diagnosticSubgroup = Object.values(result.diagnosticSubgroup);
  result.diagnosticTypes = Object.values(result.diagnosticTypes);
  result.workShedule = Object.values(result.workShedule);

  result.searchFilter = result.searchFilter.concat(result.diagnosticTypes);
  return result;
};

export default equipments;
