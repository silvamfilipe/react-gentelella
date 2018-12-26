import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

const hash = () => Date.now().toString()+Math.random().toString().replace('.','');

class Accordion extends Component {

  constructor(props) {
    super(props)
    this.loadPanels(props.children, {});
  }

  loadPanels = (children, defaultPanels) => {
    for (let childKey in children) {
      const { props } = children[childKey];
      const key = hash();
      defaultPanels[key] = {key: key, title: props.title, children: props.children, active: props.active}
    }

    this.state = {
      panels: defaultPanels
    };
  };

  closeAllPanels = () => {
    const { panels } = this.state;
    for (let panelKey in panels) {
      panels[panelKey].active = false;
    }
    this.setState({panels});
  };

  handleClick = key => {
    const { panels } = this.state;
    this.closeAllPanels();
    panels[key].active = true;
    this.setState({panels});
  };

  createPanel = panel => {
    const { key, title, active, children } = panel;
    const stateClass = active ? 'panel-collapse collapse in' : 'panel-collapse collapse';

    return (
      <div key={ key } className="panel">
        <a className="panel-heading" role="tab"
           href="#" aria-expanded={ active }
           onClick={ e => {
             e.preventDefault();
             if (active) return;

             this.handleClick(key);
           }}
        >
          <h4 className="panel-title">{ title }</h4>
        </a>
        <CSSTransition
          in={this.state.open}
          classNames="slide"
          timeout={700}
        >
        <div className={ stateClass } role="tab-panel">
          <div className="panel-body">
            { children }
          </div>
        </div>
        </CSSTransition>
      </div>
    );
  };

  generatePanels = () => {
    const { panels } = this.state;
    let panelJSX = [];

    for (let panelKey in panels) {
      const panel = panels[panelKey];
      panelJSX.push(this.createPanel(panel));
    }

    return panelJSX;
  };

  render() {
    return (
      <div className="accordion" role="tablist" aria-multiselectable="true">
        { this.generatePanels() }
      </div>
    );
  }

}

export default Accordion;
