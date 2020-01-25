import initialState from '../initialState'
import { HIDE_FLASH_MESSAGE, SHOW_ERROR_FLASH_MESSAGE, SHOW_SUCCESS_FLASH_MESSAGE } from '../actions/flashMessage'

const flashMessageReducer = (state = initialState.flashMessage, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_FLASH_MESSAGE:
      return {
        ...state,
        hidden: false,
        text: action.text,
        positive: true,
        negative: false,
      };
    case SHOW_ERROR_FLASH_MESSAGE:
      return {
        ...state,
        hidden: false,
        text: action.text,
        positive: false,
        negative: true,
      };
    case HIDE_FLASH_MESSAGE:
      return {
        ...state,
        hidden: true,
      };
    default:
      return state;
  }
};

export default flashMessageReducer;
