import equipmentsReducer from './equipments';
import filtersReducer from './filters';
import initialState from '../store/initialState';
import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';
import FILTER_EQUIPMENTS from '../actionTypes/filters'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_SUCCESS:
    case FETCH_EQUIPMENTS_ERROR:
      return equipmentsReducer(state, action);
    case FILTER_EQUIPMENTS:
      return filtersReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
