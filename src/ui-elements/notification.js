import 'pnotify/dist/pnotify.buttons.js';
import 'pnotify/dist/pnotify.desktop.js';
import 'pnotify/dist/pnotify.mobile.js';
import 'pnotify/dist/pnotify.nonblock.js';
import 'pnotify/dist/pnotify.animate.js';

import PNotify from 'pnotify';
import PropTypes from 'prop-types';
import React from 'react';

const isReady = () => typeof window !== 'undefined';

let readyCheck;


class Notification extends React.Component {

    constructor(props) {
        super(props);
        this._renderPNotify = this._renderPNotify.bind(this);
        this.state = {
            ready: isReady(),
            widget: null,
        };

        if (!this.state.ready) {
            readyCheck = setInterval(this._updateReadyState.bind(this), 1000);
        }
    }

    componentDidMount() {
        if (this.state.ready) {
            this._renderPNotify();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const render = this.props;

        if (render === 'explicit' && this.state.ready && !prevState.ready) {
            this._renderPNotify();
        }
    }

    componentWillUnmount() {
        clearInterval(readyCheck);
    }

    _updateReadyState() {
        if (isReady()) {
            this.setState({
                ready: true,
            });

            clearInterval(readyCheck);
        }
    }

    _renderPNotify() {
        let pnotifyOptions = Object.assign({}, this.props);
        if (pnotifyOptions.animateIn && pnotifyOptions.animateOut) {
            pnotifyOptions.animate = {
                animate: true,
                in_class: pnotifyOptions.animateIn,
                out_class: pnotifyOptions.animateOut
            };
        }
        // Remove temporary swap props.
        if  (pnotifyOptions.animateIn) {
            delete pnotifyOptions.animateIn;
        }
        if  (pnotifyOptions.animateOut) {
            delete pnotifyOptions.animateOut;
        }
        if (this.props.addClass !== '') {
            pnotifyOptions.addclass = this.props.addClass;
        }
        const widget = new PNotify(pnotifyOptions);
        this.setState({ widget });
    }

    render() {
        return (
            <div className="pnotify-empty" />
        );
    }
}

Notification.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    animateIn: PropTypes.string,
    animateOut: PropTypes.string,
    delay: PropTypes.number,
    shadow: PropTypes.bool,
    hide: PropTypes.bool,
    nonblock: PropTypes.any,
    desktop: PropTypes.bool,
    styling: PropTypes.any,
    icons: PropTypes.string,
    addClass: PropTypes.string
};

Notification.defaultProps = {
    type: 'notice',
    title: '',
    text: '',
    animateIn: '',
    animateOut: '',
    delay: 2000,
    shadow: true,
    hide: true,
    nonblock: true,
    desktop: true,
    styling: 'bootstrap3',
    icons: 'fontawesome4',
    addClass: ''
};

export default Notification;
