import _$ from 'jquery';
import React, { Component } from 'react';

class PageContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentHeight: window.innerHeight
        };

        this.updateHeight = this.updateHeight.bind(this);
    }

    updateHeight() {
        const footerHeight = _$('footer').height();
        const navHeight = _$('.nav_menu').height();
        const leftColHeight = _$('.left_col').eq(1).height() + 27; // + _$('.sidebar-footer').height();
        const bodyHeight = _$('body').outerHeight();

        let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        contentHeight -=  navHeight + footerHeight;

        this.setState({ contentHeight });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateHeight, false);
        this.updateHeight();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateHeight, false);
    }


    render() {
        const { contentHeight } = this.state;
        return (
            <div style={ { minHeight: contentHeight } } className="right_col" role="main">
                <div className="">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default PageContent;