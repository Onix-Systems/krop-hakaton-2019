import initialState from '../initialState';
import { RESIZE } from '../actions/resize';
import { bigPhoneOrSmallerScreen, laptopOrSmallerScreen, phoneOrSmallerScreen } from '../../helpers';

const resizeReducer = (state = initialState, action) => {
  if (action.type === RESIZE) {
    return {
      ...state,
      laptopOrSmallerScreen: laptopOrSmallerScreen(),
      bigPhoneOrSmallerScreen: bigPhoneOrSmallerScreen(),
      phoneOrSmallerScreen: phoneOrSmallerScreen(),
    };
  }
  return initialState.resize;
};

export default resizeReducer;
