import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ViewAllButton = ({ loading, history }) => {
  const onClick = () => history.push('');
  return (
    <div className="view-more-container">
      <button
        type="button"
        className="card__button col-sm-6 col-lg-4 accordion-title__bottom_row--margin"
        disabled={loading}
        onClick={onClick}
      >
        <span>ПЕРЕГЛЯНУТИ ВСІ ВАРІАНТИ</span>
      </button>
    </div>
  )
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default withRouter(
  connect(mapStateToProps)(ViewAllButton),
);
