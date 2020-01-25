import { combineReducers } from 'redux';
import loadingReducer from './loading';
import availableFiltersReducer from './availableFilters';
import filtersReducer from './filters';
import equipmentsReducer from './equipments';
import flashMessageReducer from './flashMessage';

const rootReducer = combineReducers({
  loading: loadingReducer,
  availableFilters: availableFiltersReducer,
  filters: filtersReducer,
  equipments: equipmentsReducer,
  flashMessage: flashMessageReducer,
});

export default rootReducer;
