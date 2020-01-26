import { combineReducers } from 'redux';
import loadingReducer from './loading';
import availableFiltersReducer from './availableFilters';
import equipmentsReducer from './equipments';
import flashMessageReducer from './flashMessage';

const rootReducer = combineReducers({
  loading: loadingReducer,
  availableFilters: availableFiltersReducer,
  equipments: equipmentsReducer,
  flashMessage: flashMessageReducer,
});

export default rootReducer;
