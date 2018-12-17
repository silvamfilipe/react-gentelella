import React, { Component, createContext } from 'react';

const pageContentContext = createContext({});

class PageContentProvider extends Component {

    state = {
        contentHeight: 400,
        sideBarHeight: window.innerHeight
    };

    componentDidMount() {
        this.updateHeight();
        window.addEventListener('resize', this.handleResize);
    }

    updateSideBar = height => {
        const sideBarHeight = Math.max(height, window.innerHeight);
        this.setState({sideBarHeight});
    };

    updateHeight = () => {
        const innerHeight = window.innerHeight;
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
            <pageContentContext.Provider value={{...this.state, updateHeight: this.updateHeight, updateSideBar: this.updateSideBar }}>
                { children }
            </pageContentContext.Provider>
        );
    };
}

export const PageContentConsumer = pageContentContext.Consumer;
export default PageContentProvider;
