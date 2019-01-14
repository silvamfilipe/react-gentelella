import React from 'react';

const HorizontalForm = props => {
  const { children } = props;

  return (
    <form className="form-horizontal form-label-left" { ...props }>
      { children }
    </form>
  )
};

export default HorizontalForm;
