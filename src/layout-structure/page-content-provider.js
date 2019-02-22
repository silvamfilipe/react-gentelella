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

    _isMounted = false;

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.updateHeight();
        this._isMounted = true;
    }

    updateSideBar = height => {
        try {
            if (this.state.fixedSidebar) {
              this.setState({sideBarHeight: window.innerHeight});
              return;
            }

            const sideBarHeight = Math.max(height, window.innerHeight);
            this.setState({sideBarHeight});
        } catch (e) {
            if (undefined !== console) {
                console.log('Skip height update: not mounted!');
            }
        }
    };

    updateHeight = () => {
        if (!document.getElementById('main-content')) return;

        try {
            const footerHeight = this.state.fixedFooter ? 0 : document.getElementById('footer').scrollHeight;
            const innerHeight = window.innerHeight - (footerHeight);
            const bodyHeight = document.getElementById('main-content').scrollHeight;
            if (bodyHeight < innerHeight) {
                this.setState({ contentHeight: innerHeight, sideBarHeight: innerHeight});
                return;
            }

            this.setState({ contentHeight: bodyHeight, sideBarHeight: bodyHeight});
        } catch (e) {
            if (undefined !== console) {
                console.log('Skip height update: not mounted!');
            }
        }


    };

    handleResize = () => {
        this.updateHeight(window.innerHeight);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
        document.removeEventListener('resize', this.handleResize);
        this._isMounted = false;
    }

    toggleNav = () => {
        const navSmall = !this.state.navSmall;
        const stateClass = navSmall ? 'nav-sm' : 'nav-md';
        document.body.className = this.state.fixedFooter ? stateClass + ' footer_fixed' : stateClass;
        this.setState({navSmall});
    };

    render() {
        const { children } = this.props;
        const { state } = this;
        return (
            <pageContentContext.Provider value={{
                ...state,
                updateHeight: this.updateHeight,
                updateSideBar: this.updateSideBar,
                toggleNav: this.toggleNav
            }}>
                { children }
            </pageContentContext.Provider>
        );
    };
}

export const PageContentConsumer = pageContentContext.Consumer;
export default PageContentProvider;
