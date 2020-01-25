export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = (name, value) => ({
  type: CHANGE_FILTER,
  name,
  value,
});
