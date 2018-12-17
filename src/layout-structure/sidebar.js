import React from 'react';
import PropTypes from 'prop-types';
import PageContentProvider, { PageContentConsumer } from './page-content-provider';

const Sidebar = ({ children }) => (
    <PageContentProvider>
        <PageContentConsumer>
            {props => (
                <div style={{ minHeight: props.sideBarHeight }} className='col-md-3 left_col'>
                    <div className='left_col scroll-view'>
                        { children }
                    </div>
                </div>
            )}
        </PageContentConsumer>
    </PageContentProvider>
);

Sidebar.propTypes = {
  children: PropTypes.any
};

export default Sidebar
