import React,{ Component } from 'react';

class SidebarMenu extends Component {

    render() {
        const { children } = this.props;
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <br />
                { children }
            </div>
        );
    }
}

export default SidebarMenu;
