export default {
  equipments: {
    all: [],
    filtered: [],
    error: null,
    selected: null,
  },
  availableFilters: {
    address_locality: [],
    search: [], // custodianName or diagnosticType
    diagnostic_subgroup: [],
    diagnostic_type: [],
    work_shedule: [],
  },
  filters: {
    hash: null,
    address_locality: null,
    search: '', // custodianName or diagnosticType
    diagnostic_subgroup: null,
    diagnostic_type: null,
    work_shedule: null
  },
};
