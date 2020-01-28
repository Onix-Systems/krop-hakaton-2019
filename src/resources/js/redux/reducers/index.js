import { combineReducers } from 'redux';
import loadingReducer from './loading';
import availableFiltersReducer from './availableFilters';
import equipmentsReducer from './equipments';
import flashMessageReducer from './flashMessage';
import mapReducer from './map';

const rootReducer = combineReducers({
  loading: loadingReducer,
  availableFilters: availableFiltersReducer,
  equipments: equipmentsReducer,
  flashMessage: flashMessageReducer,
  map: mapReducer,
});

export default rootReducer;
