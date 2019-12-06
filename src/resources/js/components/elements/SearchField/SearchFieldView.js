import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react'

const SearchFieldView = ({ options }) => (
  <div className="search-field">
    <Dropdown
      className="search-field__dropdown"
      placeholder="Пошук мед закладу або послуги"
      selection
      search
      fluid
      options={options}
      icon={<Icon name="search" />}
    />
  </div>
);

export default SearchFieldView;
