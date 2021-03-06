import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const SearchFieldView = ({
  value, options, onSearchChanged, onSearchQueryChanged, disabled,
}) => (
  <div className="search-field">
    <Dropdown
      className="search-field__dropdown"
      placeholder="Пошук мед. закладу або послуги"
      selection
      search
      clearable
      fluid
      value={value.value}
      options={options}
      icon={<Icon className="search-icon" name="search" />}
      onChange={onSearchChanged}
      onSearchChange={onSearchQueryChanged}
      selectOnBlur={false}
      disabled={disabled}
    />
  </div>
);

export default SearchFieldView;
