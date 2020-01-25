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

export const createQueryString = (filters) => {
  const query = Object.keys(filters).reduce((accumulator, filter) => {
    const filterValue = filters[filter];
    if (filterValue) {
      accumulator.append(filter, filterValue);
    }
    return accumulator;
  }, new URLSearchParams());

  return query.keys().next().value
    ? decodeURI(`?${query.toString()}`)
    : '';
};
