import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        active: false
    };

    wrapperRef = null;
    setWrapperRef  = node => this.wrapperRef = node;

    trigger = e => {
        const event = new CustomEvent('onClickMenuItem', {detail: e.target});
        document.dispatchEvent(event);
        this.setState({active: true});
    };

    componentDidMount() {
        document.addEventListener('onClickMenuItem', this.menuClicked);
    }

    componentWillUnmount() {
        document.removeEventListener('onClickMenuItem', this.menuClicked);
    }

    menuClicked = e => {
        if (!this.state.active) return;

        if (!this.wrapperRef.contains(e.detail)) {
            this.setState({active: false})
        }
    };

    render() {
        const { children } = this.props;
        const stateClass = this.state.active ? 'active' : '';

        return (
          <li ref={ this.setWrapperRef } className={ stateClass } onClick={ this.trigger }>
            { children }
          </li>
        );
    }
}

export default MenuItem;
