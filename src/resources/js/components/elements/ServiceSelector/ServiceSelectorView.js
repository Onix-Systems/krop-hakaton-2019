import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const ServiceSelectorView = ({
  value = '', label, options, rightBorder,
}) => {
  return (
    <div className="service-selector">
      <Dropdown
        icon={(
          <span className="service-selector__dropdown-icon">
            <Icon name="angle down" />
          </span>
        )}
        value={value}
        text={label}
        options={options}
      />
    </div>
  );
};

export default ServiceSelectorView;
