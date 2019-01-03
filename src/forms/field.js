import React from 'react';
import PropTypes from 'prop-types';

const Field = props => {
  const { type, name, values, label, required} = props;
  const requiredTag = required ? <span className="required">*</span> : '';
  const value = values.hasOwnProperty(name) ? values[name] : '';

  return (
    <div className="form-group">
      <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }
      </label>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <input
          type={ type }
          id={ name }
          name={ name }
          required={required}
          className="form-control col-md-7 col-xs-12"
          value={value}
          { ...props }
        />
      </div>
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired
};

Field.defaultProps = {
  type: 'text',
  required: false
};

export default Field;
