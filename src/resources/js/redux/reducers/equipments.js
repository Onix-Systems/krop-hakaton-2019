import initialState from '../initialState';
import { FETCHING_EQUIPMENTS, FILTER_EQUIPMENTS } from '../actionTypes/equipments';

const equipmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_EQUIPMENTS:
      console.log('FETCHING_EQUIPMENTS');
      return {
        ...state,
        equipments: {
          ...state.equipments,
          fetching: true,
        },
      };
    case FILTER_EQUIPMENTS:
      console.log('FILTER_EQUIPMENTS');
      return {
        ...state,
        equipments: {
          ...state.equipments,
          filtered: action.equipments,
          fetching: false,
        },
        filters: {
          ...state.filters,
          ...action.filters,
        },
      };
    default:
      return state;
  }
};

export default equipmentsReducer;
