import React, { Component } from 'react';

class SideBar extends Component {

    render() {
        return (
            <div className={"col-md-3 left_col"}>
                <div className={"left_col scroll-view"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SideBar;