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
        this.updateHeight();
        window.addEventListener('resize', this.handleResize);
        this._isMounted = true;
    }

    updateBodyClass = () => {
        const stateClass = this.state.navSmall ? 'nav-sm' : 'nav-md';
        document.body.className = this.state.fixedFooter ? stateClass + ' footer_fixed' : stateClass;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateBodyClass();
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

    toggleNav = () => this.setState({navSmall: !this.state.navSmall});

    render() {
        const { children } = this.props;
        return (
            <pageContentContext.Provider value={{
                ...this.state,
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
