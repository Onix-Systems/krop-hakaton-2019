import initialState from '../initialState';
import FILTER_EQUIPMENTS from '../actionTypes/equipments';

const equipmentsReducer = (state = initialState, action) => {
  if (action.type === FILTER_EQUIPMENTS) {
    return {
      ...state,
      equipments: {
        ...state.equipments,
        filtered: action.equipments,
      },
      filters: {
        ...state.filters,
        ...action.filters,
      },
    };
  }
  return state;
};

export default equipmentsReducer;
