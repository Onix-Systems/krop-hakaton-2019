import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const ServiceSelectorView = ({
  value, label, options, rightBorder, onServiceChanged,
}) => {
  return (
    <div className={classNames('service-selector', {
      'service-selector--border': rightBorder,
    })}
    >
      <Dropdown
        icon={(
          <span className="service-selector__dropdown-icon">
            <Icon name="angle down" />
          </span>
        )}
        value={value}
        text={label}
        onChange={onServiceChanged}
        options={options}
        scrolling
        direction="left"
      />
    </div>
  );
};

export default ServiceSelectorView;
