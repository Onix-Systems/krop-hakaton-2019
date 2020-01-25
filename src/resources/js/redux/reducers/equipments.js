import initialState from '../initialState';
import { EQUIPMENTS_CHANGED, EQUIPMENTS_FAILURE, EQUIPMENTS_NOT_FOUND } from '../actions/equipments';

const equipmentsReducer = (state = initialState.equipments, action) => {
  switch (action.type) {
    case EQUIPMENTS_CHANGED:
      return {
        ...state,
        error: false,
        notFound: false,
        filtered: action.equipments,
      };
    case EQUIPMENTS_NOT_FOUND:
      return {
        ...state,
        error: false,
        notFound: true,
        filtered: [],
      };
    case EQUIPMENTS_FAILURE:
      return {
        ...state,
        error: true,
        notFound: false,
        filtered: [],
      };
    default:
      return state;
  }
};

export default equipmentsReducer;
