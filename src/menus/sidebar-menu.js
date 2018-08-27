import React, { Component } from 'react';

class SideBarMenu extends Component {

    render() {
        return(
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <br />
                { this.props.children }
            </div>
        );
    }
}

export default SideBarMenu;