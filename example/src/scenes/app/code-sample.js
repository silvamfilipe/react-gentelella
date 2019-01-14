import React from 'react';

const CodeSample = ({ children, open }) => {

  if (!open) return '';

  return (
    <div className="code-sample">
      { children }
    </div>
  );

};

export default CodeSample;
