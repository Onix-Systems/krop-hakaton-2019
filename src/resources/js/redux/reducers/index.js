import { combineReducers } from 'redux';
import loadingReducer from './loading';
import availableFiltersReducer from './availableFilters';
import equipmentsReducer from './equipments';
import flashMessageReducer from './flashMessage';
import mapReducer from './map';
import resizeReducer from './resize';

const rootReducer = combineReducers({
  loading: loadingReducer,
  availableFilters: availableFiltersReducer,
  equipments: equipmentsReducer,
  flashMessage: flashMessageReducer,
  map: mapReducer,
  resize: resizeReducer,
});

export default rootReducer;
