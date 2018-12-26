import React from 'react';
import PropTypes from 'prop-types';
import PageContentProvider, { PageContentConsumer } from './page-content-provider';

const Sidebar = ({ children }) => (
    <PageContentProvider>
        <PageContentConsumer>
            {props => {
              const stateClass = props.fixedSidebar ? 'col-md-3 left_col menu_fixed' : 'col-md-3 left_col';
              return (
                <div style={{ minHeight: props.sideBarHeight }} className={ stateClass }>
                    <div className='left_col scroll-view'>
                        { children }
                    </div>
                </div>
            );}}
        </PageContentConsumer>
    </PageContentProvider>
);

Sidebar.propTypes = {
  children: PropTypes.any
};

export default Sidebar
