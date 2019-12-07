import {
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from '../actionTypes/equipments';

const initialState = {
  data: [],
  error: null,
};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_SUCCESS:
      return {
        ...state,
        data: action.equipments,
      };
    case FETCH_EQUIPMENTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default equipments;
