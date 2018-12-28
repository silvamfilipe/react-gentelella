import React, { Component } from 'react';
import { ButtonToolbar, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox';
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class Tooltips extends Component {

  state = {
    showCode: false
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import {  OverlayTrigger, Tooltip, Button } from 'react-gentelella';\n" +
            "\n" +
            "const TooltipExample = () => (\n" +
            "  <OverlayTrigger placement=\"top\" overlay={<Tooltip id=\"top-tooltip\">Tooltip top</Tooltip>}>\n" +
            "    <Button bsStyle=\"default\">Tooltip top</Button>\n" +
            "  </OverlayTrigger>\n" +
            ");\n" +
            "\n" +
            "export default TooltipExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Tooltips<small>Hover over to view</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          Hover over the links below to see tooltips:
          <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={<Tooltip id="left-tooltip">Tooltip left</Tooltip>}>
              <Button bsStyle="default">Tooltip left</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip id="top-tooltip">Tooltip top</Tooltip>}>
              <Button bsStyle="default">Tooltip top</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="bottom-tooltip">Tooltip bottom</Tooltip>}>
              <Button bsStyle="default">Tooltip bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="right-tooltip">Tooltip right</Tooltip>}>
              <Button bsStyle="default">Tooltip right</Button>
            </OverlayTrigger>

          </ButtonToolbar>
        </PanelBody>
      </Panel>
    );
  }
}

export default Tooltips;
