import React from 'react';
import PropTypes from 'prop-types';

require('./progress.css');

const Progress = ({ vertical, placement, type, now, striped, children, wide, active }) => {
  const progressBarClass = striped
    ? `progress-bar progress-bar-striped progress-bar-${type}`
    : `progress-bar progress-bar-${type}`;
  const activeClass = active ? 'active' : '';
  const progressVerticalClass = vertical ? `progress vertical ${activeClass}`: `progress ${activeClass}`;
  const progressWideClass = wide ? `${progressVerticalClass} progress_wide` : progressVerticalClass;
  const percentage = `${now}%`;
  const style = vertical ? { height: percentage } : { width: percentage };
  let progressClass;
  switch (placement) {
    case "right":
      progressClass = `${progressWideClass} right`;
      break;

    case "bottom":
      progressClass = `${progressWideClass} bottom`;
      break;

    default:
      progressClass = progressWideClass;
  }

  return (
    <div className={ progressClass }>
      <div className={ progressBarClass } data-transitiongoal={ now } aria-valuenow={ now } style={ style }>
        { children }
      </div>
    </div>
  );
};

Progress.propTypes = {
  vertical: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(['left', 'top', 'bottom', 'right']).isRequired,
  type: PropTypes.oneOf(['info', 'success', 'danger', 'warning']).isRequired,
  striped: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
  now: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

Progress.defaultProps = {
  vertical: false,
  placement: 'left',
  type: 'info',
  striped: false,
  wide: false,
  active: false
};

export default Progress;
