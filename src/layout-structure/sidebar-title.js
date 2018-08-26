import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class SideBarTitle extends Component {

    render() {
        const { appName, icon } = this.props;
        return (
            <Fragment>
                <div className="navbar nav_title" style={{border: 0}}>
                    <a href="\" className="site_title">
                        { icon }&nbsp;
                        <span>{ appName }</span>
                    </a>
                </div>
                <div className="clearfix"/>
            </Fragment>
        );
    }
}

SideBarTitle.propTypes = {
    appName: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
};

SideBarTitle.defaultProps = {
    appName: "Gentelella Alela!",
    icon: <i className={"fa fa-paw"} />
};

export default SideBarTitle;