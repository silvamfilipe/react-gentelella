import _$ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

import './main.css';

class Gentelella extends React.Component {

    componentWillMount() {
        const { loadCss } = this.props;
        const envClass = this.props.fixedFooter ? 'nav-md footer_fixed' : 'nav-md';
        _$('body').addClass(envClass);

        if (loadCss) {
            require('./gentelella.css');
        }
    }

    render() {
        return (
            <div className={"container body"}>
                <div className={"main_container"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Gentelella.propTypes = {
    fixedFooter: PropTypes.bool.isRequired,
    loadCss: PropTypes.bool.isRequired
};

Gentelella.defaultProps = {
    fixedFooter: false,
    loadCss: true
};

export default Gentelella;