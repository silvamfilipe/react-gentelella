import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanelToolbox, PanelToolboxItem, PanelToolboxDropdownItem } from "react-gentelella";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class GeneralPanelToolbox extends Component {

  handleCodeClick = e => {
    const { onCodeClick } = this.props;
    e.preventDefault();
    onCodeClick();
  }

  render() {
    return  (
      <PanelToolbox>
        <PanelToolboxItem>
          <OverlayTrigger placement="top" overlay={<Tooltip id="code-sample">Toggle code sample</Tooltip>}>
          <a href="/" onClick={ this.handleCodeClick } className="collapse-link"><i className="fa fa-code"/></a>
          </OverlayTrigger>
        </PanelToolboxItem>

        <PanelToolboxDropdownItem icon={'pencil'}>
          <PanelToolboxItem>
            <a href="/">Settings 1</a>
          </PanelToolboxItem>
          <PanelToolboxItem>
            <a href="/">Settings 2</a>
          </PanelToolboxItem>
        </PanelToolboxDropdownItem>

        <PanelToolboxItem>
          <a href="/" className="close-link"><i className="fa fa-close"/></a>
        </PanelToolboxItem>

      </PanelToolbox>
    );
  }
}

GeneralPanelToolbox.propTypes = {
  onCodeClick: PropTypes.func.isRequired
};

GeneralPanelToolbox.defaultProps = {
  onCodeClick: () => {}
}

export default GeneralPanelToolbox;
