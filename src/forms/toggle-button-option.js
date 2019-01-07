import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleButtonOption extends Component {
  handleChange = (e, value) => {
    const { onChange } = this.props;
    onChange(e, value);
  };

  render() {
    const { children, name, type, value, checked, onBlur, bsStyle, activeStyle } = this.props;
    const allProps = {checked, onBlur};
    const labelClass = checked ? `btn btn-${activeStyle} active`  : `btn btn-${bsStyle}`;
    return (
      <label className={ labelClass }>
        <input { ...allProps } type={ type } name={ name } value={ value } onChange={ e => this.handleChange(e, value) }/>{ children }
      </label>
    );
  }
}

ToggleButtonOption.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  bsStyle: PropTypes.oneOf(['default', 'info', 'danger', 'success', 'primary']).isRequired,
  activeStyle: PropTypes.oneOf(['default', 'info', 'danger', 'success', 'primary']).isRequired,
};

ToggleButtonOption.defaultProps = {
  type: 'radio',
  onChange: (e, value) => {},
  onBlur: e => {},
  checked: false,
  bsStyle: 'default',
  activeStyle: 'default',
  name: 'sample'
};

export default ToggleButtonOption;
