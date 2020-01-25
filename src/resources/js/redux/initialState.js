export default {
  loading: true,
  equipments: {
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
    q: '', // custodianName or diagnosticType
    diagnostic_subgroup: '',
    diagnostic_type: '',
    work_schedule: '',
  },
};
