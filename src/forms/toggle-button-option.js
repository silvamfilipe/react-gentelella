import React from 'react';
import PropTypes from 'prop-types';

const ToggleButtonOption = ({ children, name, type, value, checked, onChange, onBlur, bsStyle }) => {
  const allProps = {checked, onBlur, onChange};
  const labelClass = checked ? `btn btn-${bsStyle} active`  : `btn btn-${bsStyle}`;
  return (
    <label className={ labelClass }>
      <input { ...allProps } type={ type } name={ name } value={ value }/>{ children }
    </label>
  );
};

ToggleButtonOption.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  bsStyle: PropTypes.oneOf(['default', 'info', 'danger', 'success', 'primary']).isRequired,
};

ToggleButtonOption.defaultProps = {
  type: 'radio',
  onChange: e => {},
  onBlur: e => {},
  checked: false,
  bsStyle: 'default'
};

export default ToggleButtonOption;
