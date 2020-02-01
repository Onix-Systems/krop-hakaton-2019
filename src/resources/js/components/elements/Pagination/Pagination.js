import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Pagination as SemanticUiPagination } from 'semantic-ui-react';
import {
  createSearchStringFromProps,
  bigPhoneOrSmallerScreen,
  phoneOrSmallerScreen,
} from '../../../helpers';

class Pagination extends Component {
  onPageChanged = (event, { activePage }) => {
    const { history, location } = this.props;
    const searchString = createSearchStringFromProps(location.search, { page: activePage });
    history.push(searchString);
  }

  render() {
    const { currentPage, lastPage } = this.props;
    if (lastPage === 1) return null;
    return (
      <div className="pagination-wrapper">
        <SemanticUiPagination
          activePage={currentPage}
          totalPages={lastPage}
          onPageChange={this.onPageChanged}
          className="custom-pagination"
          siblingRange={bigPhoneOrSmallerScreen() ? 0 : 1}
          boundaryRange={phoneOrSmallerScreen() ? 0 : 1}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.equipments.pagination.current_page,
  lastPage: state.equipments.pagination.last_page,
});

export default withRouter(
  connect(mapStateToProps)(Pagination),
);
