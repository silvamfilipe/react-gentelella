import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

  constructor(props) {
    super(props);

    const {children} = props;
    const defaultTabs = {};
    for (let childKey in children) {
      const {props} = children[childKey];
      const key = hash();
      defaultTabs[key] = {key: key, title: props.title, children: props.children, active: props.active}
    }

    this.state = {
      tabs: defaultTabs
    };

    this.tabClickHandler = this.tabClickHandler.bind(this);
    this.removeAllOtherActive = this.removeAllOtherActive.bind(this);
  }

  removeAllOtherActive() {
    const {tabs} = this.state;
    for (let tabKey in tabs) {
      tabs[tabKey].active = false;
    }
    this.setState({tabs});
  };

  tabClickHandler(key) {
    const {tabs} = this.state;
    this.removeAllOtherActive();
    tabs[key].active = true;
    this.setState({tabs});
  };

  generateTabs() {
    const {tabs} = this.state;

    let tabsJSX = [];
    let tabsContentJSX = [];

    for (let tabKey in tabs) {
      const tab = tabs[tabKey];
      tabsJSX.push(
        <li key={tab.key} style={!tab.active ? {cursor: 'pointer'} : null} role="presentation" className={tab.active ? "active" : null}>
          <a onClick={!tab.active ? () => this.tabClickHandler(tab.key) : null} key={tab.key + "-tab"} role="tab" data-toggle="tab">{tab.title}</a>
        </li>
      );

      if (tab.active) {
        tabsContentJSX.push(
          <div role="tabpanel" className="tab-pane fade active in" key={tab.key + "-content"} aria-labelledby={tab.key + "-tab"}>
            {tab.children}
          </div>
        );
      }
    }

    const { right, vertical } = this.props;
    const prefix = vertical ? ' tabs-': '';
    const rightClass = right ? prefix + 'right' : prefix+'left';
    console.log(rightClass);
    return (
      <Fragment>
        <div className="" role="tabpanel" data-example-id="togglable-tabs">
          <ul className={'nav nav-tabs bar_tabs' + rightClass} role="tablist">
            {tabsJSX}
          </ul>
          <div className="tab-content">
            {tabsContentJSX}
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    return this.generateTabs();
  }
}

Tabs.propTypes = {
  right: PropTypes.bool.isRequired,
  vertical: PropTypes.bool.isRequired
};

Tabs.defaultProps = {
  right: false,
  vertical: false
};

const hash = () => Date.now().toString()+Math.random().toString().replace('.','');

export default Tabs;
