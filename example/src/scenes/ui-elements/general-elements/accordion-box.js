import React, { Component } from 'react';
import { AccordionPanel, Accordion, Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class AccordionBox extends Component {

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
            "import { AccordionPanel, Accordion } from 'react-gentelella';\n" +
            "\n" +
            "const AccordionExample = () => (\n" +
            "  <Accordion>\n" +
            "    <AccordionPanel title={\"Collapsible Group Items #1\"} active>\n" +
            "      <p><strong>Collapsible Item 1 data</strong></p>\n" +
            "    </AccordionPanel>\n" +
            "    \n" +
            "    <AccordionPanel title={\"Collapsible Group Items #2\"}>\n" +
            "      <p><strong>Collapsible Item 2 data</strong></p>\n" +
            "    </AccordionPanel>\n" +
            "    \n" +
            "    <AccordionPanel title={\"Collapsible Group Items #3\"}>\n" +
            "      <p><strong>Collapsible Item 3 data</strong></p>\n" +
            "    </AccordionPanel>\n" +
            "  </Accordion>\n" +
            ");\n" +
            "\n" +
            "export default AccordionExample;\n"
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
            <i className={'fa fa-align-left'}/>
            &nbsp;Collapsible / Accordion<small>Sessions</small>
          </h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <Accordion>
            <AccordionPanel title={"Collapsible Group Items #1"} active>
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </AccordionPanel>

            <AccordionPanel title={"Collapsible Group Items #2"}>
              <p><strong>Collapsible Item 2 data</strong>
              </p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
            </AccordionPanel>
            <AccordionPanel title={"Collapsible Group Items #3"}>
              <p><strong>Collapsible Item 3 data</strong>
              </p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
            </AccordionPanel>
          </Accordion>
        </PanelBody>
      </Panel>
    );
  }
}


export default AccordionBox;
