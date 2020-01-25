export const mapFilterToDropdownProp = (filter) => ({
  text: filter,
  value: filter,
  selected: true,
});

export const mapAvailableFiltersToDropdownProp = (filters) => Object.keys(filters).reduce((result, filter) => ({
  ...result,
  [filter]: filters[filter].map((value) => ({
    text: value,
    value,
    selected: false,
  })),
}), {});
