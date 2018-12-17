import React from 'react';
import PageContentProvider, { PageContentConsumer } from './page-content-provider';

const TopNavigation = ({ children }) => (
  <div className="top_nav">
    <div className="nav_menu" style={{ minHeight: '57px' }}>
      <nav>
        <div className="nav toggle">
            <PageContentProvider>
            <PageContentConsumer>
                {props => (
                    <a onClick={ props.toggleNav } id="menu_toggle"><i className="fa fa-bars"/></a>
                )}
            </PageContentConsumer>
            </PageContentProvider>
        </div>
        { children }
      </nav>
    </div>
  </div>
)

export default  TopNavigation;
