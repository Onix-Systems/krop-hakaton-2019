import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Title = ({ location, total, selectedEquipment }) => {
  if (selectedEquipment) {
    return null;
  }

  let title;
  if (!location.search) {
    title = `Понад ${total} варіантів діагностичного обладнання`;
  } else {
    title = `Знайдено ${total} варіантів обладнання`;
  }

  return (
    <div className="list__title">
      {title}
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.equipments.pagination.total,
  selectedEquipment: state.equipments.selected,
});

export default withRouter(
  connect(mapStateToProps)(Title),
);
