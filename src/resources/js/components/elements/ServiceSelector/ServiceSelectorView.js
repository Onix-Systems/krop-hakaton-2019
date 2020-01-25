import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const ServiceSelectorView = ({
  selected, label, options, rightBorder, onServiceChanged, disabled
}) => {
  const onClear = (event) => onServiceChanged(event, { value: '' });
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
        value={selected.value}
        text={selected.value || label}
        onChange={onServiceChanged}
        options={options}
        disabled={disabled}
        scrolling
        direction="left"
      />
      {selected.value && (
        <div
          onClick={onClear}
          className="service-selector__clear_icon"
        >
          <Icon name="times circle outline" />
        </div>
      )}
    </div>
  );
};

export default ServiceSelectorView;
