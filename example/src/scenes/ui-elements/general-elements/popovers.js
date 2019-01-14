import React, { Component } from 'react';
import { ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox';
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

const popoverLeft = (
  <Popover id="popover-positioned-left" title="Popover left">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-top" title="Popover top">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
  </Popover>
);

const popoverBottom = (
  <Popover id="popover-positioned-bottom" title="Popover bottom">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
  </Popover>
);

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
  </Popover>
);

class Popovers extends Component {

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
            "import { OverlayTrigger, Popover, Button } from 'react-bootstrap';\n" +
            "\n" +
            "const popoverRight = (\n" +
            "  <Popover id=\"popover-positioned-right\" title=\"Popover right\">\n" +
            "    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\n" +
            "  </Popover>\n" +
            ");\n" +
            "\n" +
            "const PopoverExample = () => (\n" +
            "  <OverlayTrigger trigger=\"click\" placement=\"right\" overlay={popoverRight}>\n" +
            "    <Button>Right</Button>\n" +
            "  </OverlayTrigger>\n" +
            ");\n" +
            "\n" +
            "export default PopoverExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Popovers<small>Click to view</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <p>Add small overlays of content for housing secondary information.</p>
          <ButtonToolbar>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
              <Button>Left</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
              <Button>Top</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
              <Button>Bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
              <Button>Right</Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </PanelBody>
      </Panel>
    );
  }
}

export default Popovers;
