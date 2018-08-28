import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class PageTitle extends Component {

    render() {
        const { children, title } = this.props;
        return(
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
    }
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageTitle;