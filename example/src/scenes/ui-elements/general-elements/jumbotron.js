import React, { Component } from 'react';
import { Jumbotron as BsJumbotron } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import Highlight from 'react-highlight'

import GeneralPanelToolbox from '../../app/general-panel-toolbox';
import CodeSample from '../../app/code-sample'

class Jumbotron extends Component {

  state = {
    showCode: false
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {"import React from 'react';\n" +
          "import { Jumbotron } from 'react-bootstrap';\n\n" +
          "" +
          "const JumbotronExample = () => (\n  <Jumbotron>\n" +
          "    <h1>Hello, world!</h1>\n" +
          "    <p>This is a simple hero unit, a simple jumbotron-style...</p>\n" +
          "  </Jumbotron>\n);\n\n" +
          "export default JumbotronExample;" +
          ""
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return  (
      <Panel>
        <PanelHeader>
          <h2>Jumbotron<small>Normal</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => {this.setState({showCode: !this.state.showCode});} } />
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <BsJumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          </BsJumbotron>
        </PanelBody>
      </Panel>
    );
  }
}

export default Jumbotron;
