import React, { Fragment } from 'react'

const PageTitle = ({ children, title }) => (
  <Fragment>
    <div className="page-title">
      <div className="title_left">
        <h3>{ title }</h3>
      </div>

      <div className="title_right">
        { children }
      </div>
    </div>
    <div className="clearfix" />
  </Fragment>
);

export default PageTitle;
