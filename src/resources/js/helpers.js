export const mapAvailableFiltersToDropdownProp = (filters) => Object.keys(filters).reduce(
  (result, filter) => ({
    ...result,
    [filter]: filters[filter].map((value) => ({
      text: value,
      value,
      selected: false,
    })),
  }),
  {},
);

export const mapQueryStringParamToProp = (queryString, name, defaultValue) => {
  const query = new URLSearchParams(queryString);
  const value = query.get(name) || defaultValue;
  return {
    text: value,
    selected: true,
    value,
  };
};

export const createSearchStringFromProps = (search, props) => {
  const query = new URLSearchParams(search);
  Object.keys(props).forEach((filter) => {
    const filterValue = props[filter];
    if (filterValue) {
      query.set(filter, filterValue);
    } else {
      query.delete(filter);
    }
  });

  return query.keys().next().value
    ? decodeURI(`search?${query.toString()}`)
    : '';
};

export const createQueryString = (filters) => {
  const query = Object.keys(filters).reduce((accumulator, filter) => {
    const filterValue = filters[filter];
    if (filterValue) {
      accumulator.set(filter, filterValue);
    }
    return accumulator;
  }, new URLSearchParams());

  return query.keys().next().value
    ? decodeURI(`?${query.toString()}`)
    : '';
};
