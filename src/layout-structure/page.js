import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { PageContentConsumer } from './page-content-provider';

class Page extends Component {

    currentHeight = 0;
    interval = null;

    constructor(props) {
        super(props);
        this.container = React.createRef();
    }

    updateHeight = height => {
        const { onRender } = this.props;
        this.currentHeight = height;
        onRender(height)
    };

    checkHeight = () => {
        if (this.container.current.scrollHeight !== this.currentHeight) {
            this.updateHeight(this.container.current.scrollHeight)
        }
    };

    componentDidMount() {
        this.interval = setInterval(this.checkHeight, 200);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { children } = this.props;
        return (
            <PageContentConsumer>
                {({contentHeight, fixedFooter}) => (
                    <div style={ { minHeight: contentHeight } } className="right_col" role="main">
                        <div ref={this.container} id="main-content" className="main-content">
                            { children }
                            { fixedFooter ? (
                              <Fragment>
                                <br />&nbsp;
                                <br />&nbsp;
                                <br />&nbsp;
                              </Fragment>
                              ): '' }
                        </div>
                    </div>
                )}
            </PageContentConsumer>
        );
    }
}

Page.propTypes = {
    onRender: PropTypes.func.isRequired
};

Page.defaultProps = {
    onRender: () => {}
};

export default Page;
