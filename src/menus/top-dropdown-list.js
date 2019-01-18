import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopDropdownList extends Component {

    state = {
        open: false
    };

    setWrapperRef = node => this.wrapperRef = node;

    handleClick = e => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        document.addEventListener('onClickMenuItem', this.menuClicked);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('onClickMenuItem', this.menuClicked);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    menuClicked = (e) => {
        if (!this.state.open) return;

        this.setState({open: false});
    };

    handleClickOutside = e => {
        if (!this.state.open) return;
        if (!this.wrapperRef.contains(e.target)) {
            this.setState({open: false})
        }
    };

    render() {
        const { number, label, children, customClass } = this.props;
        const { open } = this.state;
        const numberBadge = number !== 0 ? <span className={'badge ' + customClass}>{ number }</span> : '';
        const elmClass = open ? 'dropdown open' : 'dropdown';

        return(
            <li ref={this.setWrapperRef} role="presentation" className={ elmClass }>
                <a  href="#" onClick={ this.handleClick } className="dropdown-toggle info-number" aria-expanded={ open }>
                    { label }
                    { numberBadge }
                </a>
                <ul className="dropdown-menu list-unstyled msg_list" role="menu">
                    { children }
                </ul>
            </li>
        );
    }
}

TopDropdownList.propTypes = {
    label: PropTypes.any.isRequired,
    number: PropTypes.string.isRequired,
    customClass: PropTypes.string
};

TopDropdownList.defaultProps = {
    number: 0
};

export default TopDropdownList;
