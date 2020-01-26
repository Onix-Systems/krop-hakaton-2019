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

export const mapEquipmentsToPoints = (equipments) => {
  const setOfPoints = {
    latitude: {},
    longitude: {},
  };

  const points = equipments.filter((equipment) => {
    const { latitude, longitude } = equipment;
    if (!setOfPoints.latitude[latitude] && !setOfPoints.longitude[longitude]) {
      setOfPoints.latitude[latitude] = true;
      setOfPoints.longitude[longitude] = true;
      return true;
    }
    return false;
  });

  const maxPoint = points.reduce((current, point) => {
    if (point.latitude > current.latitude && point.longitude > current.longitude) {
      return { ...point };
    }
    return current;
  }, {
    latitude: points[0].latitude,
    longitude: points[0].longitude,
  });

  const minPoint = points.reduce((current, point) => {
    if (point.latitude < current.latitude && point.longitude < current.longitude) {
      return { ...point };
    }
    return current;
  }, {
    latitude: points[0].latitude,
    longitude: points[0].longitude,
  });

  const center = {
    latitude: (maxPoint.latitude - minPoint.latitude) / 2 + +minPoint.latitude,
    longitude: (maxPoint.longitude - minPoint.longitude) / 2 + +minPoint.longitude + 0.12,
  };
  return { points, center };
};
