import FILTER_EQUIPMENTS from '../actionTypes/filters';

const filter = ({ filterType, value }) => ({
  type: FILTER_EQUIPMENTS,
  filterType,
  value,
});

export default filter;
