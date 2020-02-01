export default {
  loading: true,
  equipments: {
    notFound: false,
    error: false,
    filtered: [],
    selected: null,
    pagination: {
      current_page: 1,
      last_page: 1,
      per_page: 1,
      total: 0,
    },
  },
  availableFilters: {
    address_locality: [],
    q: [], // custodianName or diagnosticType
    diagnostic_subgroup: [],
    diagnostic_type: [],
    work_schedule: [],
  },
  flashMessage: {
    hidden: true,
    text: '',
    positive: false,
    negative: false,
  },
  map: false,
};
