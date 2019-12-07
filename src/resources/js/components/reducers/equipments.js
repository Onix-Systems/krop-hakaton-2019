import FETCH_EQUIPMENTS from '../constants/actionTypes';

const equipments = (state, action) => {
  if (action.type === FETCH_EQUIPMENTS) {
    return [];
  }
  return state;
};

export default equipments;
