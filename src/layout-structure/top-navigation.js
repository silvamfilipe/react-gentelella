import React, { Component } from 'react';

class TopNavigation extends Component {

    render() {
        return (

            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars" /></a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            { this.props.children }

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default TopNavigation;