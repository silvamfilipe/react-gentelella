import _$ from 'jquery';
import React, { Component } from 'react';

class TopNavigation extends Component {

    static handleMenuToggle() {
        _$('body').toggleClass('nav-md nav-sm');
    }

    render() {
        return (

            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a onClick={TopNavigation.handleMenuToggle} id="menu_toggle"><i className="fa fa-bars" /></a>
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