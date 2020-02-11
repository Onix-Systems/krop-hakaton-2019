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

export const laptopOrSmallerScreen = () => window.matchMedia('only screen and (max-width: 1199px)').matches;
export const bigPhoneOrSmallerScreen = () => window.matchMedia('only screen and (max-width: 565px)').matches;
export const phoneOrSmallerScreen = () => window.matchMedia('only screen and (max-width: 425px)').matches;

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

  const edgePoints = points.reduce((prev, point) => ({
    maxLatitude: Math.max(prev.maxLatitude, point.latitude),
    minLatitude: Math.min(prev.minLatitude, point.latitude),
    maxLongitude: Math.max(prev.maxLongitude, point.longitude),
    minLongitude: Math.min(prev.minLongitude, point.longitude),
  }), {
    maxLatitude: points[0].latitude,
    minLatitude: points[0].latitude,
    maxLongitude: points[0].longitude,
    minLongitude: points[0].longitude,
  });

  const center = {
    latitude: (edgePoints.maxLatitude - edgePoints.minLatitude) / 2 + +edgePoints.minLatitude,
    longitude: (edgePoints.maxLongitude - edgePoints.minLongitude) / 2 + +edgePoints.minLongitude,
  };
  return { points, center };
};
