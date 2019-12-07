import equipmentsReducer from './equipments';
import initialState from '../store/initialState';
import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_SUCCESS:
    case FETCH_EQUIPMENTS_ERROR:
      return equipmentsReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
