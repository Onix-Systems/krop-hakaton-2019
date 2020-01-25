import { combineReducers } from 'redux';
import loadingReducer from './loading';
import availableFiltersReducer from './availableFilters';
import filtersReducer from './filters';
import equipmentsReducer from './equipments';

const rootReducer = combineReducers({
  loading: loadingReducer,
  availableFilters: availableFiltersReducer,
  filters: filtersReducer,
  equipments: equipmentsReducer,
});

export default rootReducer;
