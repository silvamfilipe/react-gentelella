import React from 'react';

const BaseTheme = () => {
  require('./gentelella.css');
  require('./fixes.css');
  return <span className="default-css-from-gentelella-theme"/>;
}

export default BaseTheme;
