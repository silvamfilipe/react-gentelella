import React, { Component, createContext } from 'react';

const pageContentContext = createContext({});

class PageContentProvider extends Component {

    state = {
        contentHeight: 400,
        sideBarHeight: window.innerHeight,
        navSmall: document.body.className.match(/(nav-sm)/i) && true,
        fixedSidebar: document.body.className.match(/(menu_fixed)/i) && true,
        fixedFooter: document.body.className.match(/(footer_fixed)/i) && true,
    };

    componentDidMount() {
        this.updateHeight();
        window.addEventListener('resize', this.handleResize);
    }

    updateBodyClass = () => {
        const stateClass = this.state.navSmall ? 'nav-sm' : 'nav-md';
        document.body.className = this.state.fixedFooter ? stateClass + ' footer_fixed' : stateClass;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateBodyClass();
    }

    updateSideBar = height => {
        if (this.state.fixedSidebar) {
          this.setState({sideBarHeight: window.innerHeight});
          return;
        }

        const sideBarHeight = Math.max(height, window.innerHeight);
        this.setState({sideBarHeight});
    };

    updateHeight = () => {
        const footerHeight = this.state.fixedFooter ? 0 : document.getElementById('footer').scrollHeight;
        const innerHeight = window.innerHeight - (footerHeight);
        const bodyHeight = document.getElementById('main-content').scrollHeight;

        if (bodyHeight < innerHeight) {
            this.setState({ contentHeight: innerHeight, sideBarHeight: innerHeight});
            return;
        }

        this.setState({ contentHeight: bodyHeight, sideBarHeight: bodyHeight});
    };

    handleResize = () => {
        this.updateHeight(window.innerHeight);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
        document.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { children } = this.props;
        return (
            <pageContentContext.Provider value={{
                ...this.state,
                updateHeight: this.updateHeight,
                updateSideBar: this.updateSideBar,
                toggleNav: () => this.setState({navSmall: !this.state.navSmall})
            }}>
                { children }
            </pageContentContext.Provider>
        );
    };
}

export const PageContentConsumer = pageContentContext.Consumer;
export default PageContentProvider;
