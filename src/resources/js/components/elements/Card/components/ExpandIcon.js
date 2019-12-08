import React from 'react';
import { Icon } from 'semantic-ui-react';

const ExpandIcon = ({ expand, onExpandClicked }) => (
  <button
    type="button"
    className="expand-icon"
    onClick={() => onExpandClicked()}
  >
    <Icon
      className="expand-icon__icon"
      name={expand ? 'angle up' : 'angle down'}
    />
  </button>
);

export default ExpandIcon;
