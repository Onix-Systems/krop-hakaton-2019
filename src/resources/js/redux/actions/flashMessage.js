export const SHOW_SUCCESS_FLASH_MESSAGE = 'SHOW_SUCCESS_FLASH_MESSAGE';
export const SHOW_ERROR_FLASH_MESSAGE = 'SHOW_ERROR_FLASH_MESSAGE';
export const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';

export const showSuccessFlashMessage = (text) => ({
  type: SHOW_SUCCESS_FLASH_MESSAGE,
  text,
});

export const showErrorFlashMessage = (text) => ({
  type: SHOW_ERROR_FLASH_MESSAGE,
  text,
});

export const hideFlashMessage = () => ({
  type: HIDE_FLASH_MESSAGE,
});
