export default {
  equipments: {
    fetching: false,
    notFound: false,
    error: false,
    filtered: [],
    selected: null,
  },
  availableFilters: {
    address_locality: [],
    q: [], // custodianName or diagnosticType
    diagnostic_subgroup: [],
    diagnostic_type: [],
    work_schedule: [],
  },
  filters: {
    hash: null,
    address_locality: 'Кропивницький',
    q: null, // custodianName or diagnosticType
    diagnostic_subgroup: null,
    diagnostic_type: null,
    work_schedule: null,
  },
};
