import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class Alerts extends Component {

  state = {
    showCode: false,
    success: true,
    info: true,
    warning: true,
    error: true
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import { Alert } from 'react-bootstrap';\n" +
            "\n" +
            "const AlertExample = () => (\n" +
            "  <div>\n" +
            "    <Alert bsStyle=\"success\">\n" +
            "      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.\n" +
            "    </Alert>\n" +
            "  </div>\n" +
            ");\n" +
            "\n" +
            "export default AlertExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  success = () => {
    if (!this.state.success) return '';

    return (
      <Alert bsStyle="success" onDismiss={() => this.setState({success: false})}>
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    );
  };

  info = () => {
    if (!this.state.info) return '';

    return (
      <Alert bsStyle="info" onDismiss={() => this.setState({info: false})}>
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    );
  };

  warning = () => {
    if (!this.state.warning) return '';

    return (
      <Alert bsStyle="warning" onDismiss={() => this.setState({warning: false})}>
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    );
  };

  error = () => {
    if (!this.state.error) return '';

    return (
      <Alert bsStyle="error" onDismiss={() => this.setState({error: false})}>
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Alerts</h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }

          { this.success() }
          { this.info() }
          { this.warning() }
          { this.error() }

        </PanelBody>
      </Panel>
    );
  }
}

export default Alerts;
