export const EQUIPMENTS_CHANGED = 'EQUIPMENTS_CHANGED';
export const EQUIPMENTS_NOT_FOUND = 'EQUIPMENTS_NOT_FOUND';
export const EQUIPMENTS_FAILURE = 'EQUIPMENTS_FAILURE';

export const equipmentsChanged = (equipments) => ({
  type: EQUIPMENTS_CHANGED,
  equipments,
});

export const equipmentsNotFound = () => ({
  type: EQUIPMENTS_NOT_FOUND,
});

export const equipmentsFailure = () => ({
  type: EQUIPMENTS_FAILURE,
});
