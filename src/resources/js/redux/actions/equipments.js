export const EQUIPMENTS_CHANGED = 'EQUIPMENTS_CHANGED';
export const UNIQUE_EQUIPMENT_SELECTED = 'UNIQUE_EQUIPMENT_SELECTED';
export const EQUIPMENTS_NOT_FOUND = 'EQUIPMENTS_NOT_FOUND';
export const EQUIPMENTS_FAILURE = 'EQUIPMENTS_FAILURE';

export const equipmentsChanged = (equipments) => ({
  type: EQUIPMENTS_CHANGED,
  equipments,
});

export const uniqueEquipmentSelected = (equipment) => ({
  type: UNIQUE_EQUIPMENT_SELECTED,
  equipment,
});

export const equipmentsNotFound = () => ({
  type: EQUIPMENTS_NOT_FOUND,
});

export const equipmentsFailure = () => ({
  type: EQUIPMENTS_FAILURE,
});
