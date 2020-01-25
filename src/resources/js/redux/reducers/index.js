import initialState from '../initialState';
import FETCH_AVAILABLE_FILTERS from '../actionTypes/filters';
import { FETCHING_EQUIPMENTS, FILTER_EQUIPMENTS } from '../actionTypes/equipments';
import filtersReducer from './filters';
import equipmentsReducer from './equipments';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILABLE_FILTERS:
      return filtersReducer(state, action);
    case FETCHING_EQUIPMENTS:
    case FILTER_EQUIPMENTS:
      return equipmentsReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
