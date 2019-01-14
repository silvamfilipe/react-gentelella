import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class Dorpdowns extends Component {

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
            "import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';\n" +
            "\n" +
            "const DropdownMenuExample = () => (\n" +
            "  <Nav bsStyle=\"pills\" activeKey={\"3\"} >\n" +
            "    <NavItem eventKey={\"1\"} href=\"#\">\n" +
            "      Regular link\n" +
            "    </NavItem>\n" +
            "    <NavDropdown eventKey=\"2\" title=\"Dropdown\">\n" +
            "      <MenuItem eventKey=\"2.1\">Action</MenuItem>\n" +
            "      <MenuItem eventKey=\"2.2\">Another action</MenuItem>\n" +
            "      <MenuItem eventKey=\"2.3\">Something else here</MenuItem>\n" +
            "      <MenuItem divider />\n" +
            "      <MenuItem eventKey=\"2.4\">Separated link</MenuItem>\n" +
            "    </NavDropdown>\n" +
            "    <NavDropdown eventKey=\"3\" title=\"Active dropdown\">\n" +
            "      <MenuItem eventKey=\"3.1\">Action</MenuItem>\n" +
            "      <MenuItem eventKey=\"3.2\">Another action</MenuItem>\n" +
            "      <MenuItem eventKey=\"3.3\">Something else here</MenuItem>\n" +
            "      <MenuItem divider />\n" +
            "      <MenuItem eventKey=\"3.4\">Separated link</MenuItem>\n" +
            "    </NavDropdown>\n" +
            "  </Nav>\n" +
            ");\n" +
            "\n" +
            "export default DropdownMenuExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>
            <i className={'fa fa-chevron-down'}/>
            &nbsp;Dropdowns<small>Multiple dropdown designs</small>
          </h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <p>Gentelella provides you with several dropdown designs for your choosing.</p>
          <Nav bsStyle="pills" activeKey={"5"} >
            <NavItem eventKey={"1"} href="#">
              Regular link
            </NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="5" title="Active dropdown" id="nav-active-dropdown">
              <MenuItem eventKey="5.1">Action</MenuItem>
              <MenuItem eventKey="5.2">Another action</MenuItem>
              <MenuItem eventKey="5.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="5.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </PanelBody>
      </Panel>
    );
  }
}

export default Dorpdowns;
