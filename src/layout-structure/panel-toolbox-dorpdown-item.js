import React from 'react';

class PanelToolboxDropdownItem extends React.Component {

    state = {
        open: false
    };

    toggleMenu = e => {
        e.preventDefault();
        this.setState({ open: !this.state.open});
    };

    render() {
        const { children, icon } = this.props;
        const { open } = this.state;
        const stateClass = open ? 'dropdown open' : 'dropdown';
        return (
            <li className={ stateClass }>
                <a onClick={ this.toggleMenu } href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded={open}>
                    <i className={"fa fa-"+icon}/>
                </a>
                <ul className="dropdown-menu" role="menu">
                    { children }
                </ul>
            </li>
        );
    }
}

export default PanelToolboxDropdownItem;
