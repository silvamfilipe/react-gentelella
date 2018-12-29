import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import { Modal, Button } from 'react-bootstrap';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class Modals extends Component {

  state = {
    showSmall: false,
    showLarge: false,
    showCode: false
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React, { Component } from 'react';\n" +
            "import { Modal, Button } from 'react-bootstrap';\n" +
            "\n" +
            "class ModalExample extends Component {\n" +
            "\n" +
            "  state = {\n" +
            "    show: false\n" +
            "  };\n" +
            "\n" +
            "  handleClose = () => this.setState({ show: false });\n" +
            "\n" +
            "  openModal = () => this.setState({show: true});\n" +
            "\n" +
            "  render() {\n" +
            "    return (\n" +
            "      <div>\n" +
            "        <Button onClick={ this.openModal } bsStyle=\"primary\">Open modal</Button>\n" +
            "      \n" +
            "        <Modal show={ this.state.show } onHide={ this.handleClose }>\n" +
            "          <Modal.Header closeButton>\n" +
            "            <Modal.Title>Modal title</Modal.Title>\n" +
            "          </Modal.Header>\n" +
            "          <Modal.Body>\n" +
            "            <h4>Text in a modal</h4>\n" +
            "            <p>Some content...</p>\n" +
            "          </Modal.Body>  \n" +
            "          <Modal.Footer>\n" +
            "            <Button onClick={ this.handleClose }>Close</Button>\n" +
            "          </Modal.Footer>\n" +
            "        </Modal>\n" +
            "        \n" +
            "      </div>\n" +
            "    );\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "export default ModalExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  body = (
    <Modal.Body>
      <h4>Text in a modal</h4>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </Modal.Body>
  );

  footer = (
    <Modal.Footer>
      <Button onClick={ () => this.setState({showLarge: false}) }>Close</Button>
      <Button bsStyle={'primary'}>Save changes</Button>
    </Modal.Footer>
  );

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2><i className={'fa fa-square-o'}/> Modals</h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <Button onClick={ () => this.setState({showLarge: true})} bsStyle={'primary'}>Large modal</Button>
          <Button onClick={ () => this.setState({showSmall: true})} bsStyle={'primary'}>Small modal</Button>

          <Modal show={this.state.showLarge} onHide={ () => this.setState({showLarge: false}) }>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            { this.body }
            { this.footer }
          </Modal>

          <Modal bsSize="small" show={this.state.showSmall} onHide={ () => this.setState({showSmall: false}) }>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            { this.body }
            <Modal.Footer>
              <Button onClick={ () => this.setState({showSmall: false}) }>Close</Button>
              <Button bsStyle={'primary'}>Save changes</Button>
            </Modal.Footer>
          </Modal>

        </PanelBody>
      </Panel>
    );
  }
}

export default Modals;
