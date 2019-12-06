import React, { Component } from 'react';
import SearchFieldView from './SearchFieldView';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { text: 'Заклад 1', value: 1 },
        { text: 'Послуга 1', value: 2 },
      ],
    };
  }

  render() {
    const { options } = this.state;
    return (
      <SearchFieldView
        options={options}
      />
    );
  }
}

export default SearchField;
