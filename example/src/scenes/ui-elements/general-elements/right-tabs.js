import React, { Component } from 'react';
import { Tabs, Tab, Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class RightTabs extends Component {

  state = {
    showCode: false,
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import { Tabs, Tab } from 'react-gentelella';\n\n" +
            "const TabsExample = () => (\n  <Tabs right>\n" +
            "    <Tab title={\"Home\"} active>\n" +
            "      Raw denim you probably haven't heard of them jean shorts Austin...\n" +
            "    </Tab>\n" +
            "    <Tab title={\"Profile\"}>\n" +
            "      Food truck fixie locavore, accusamus mcsweeney's marfa nulla...\n" +
            "    </Tab>\n" +
            "    <Tab title={\"Profile\"}>\n" +
            "      xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee...\n" +
            "    </Tab>\n" +
            "  </Tabs>\n);\n\n" +
            "export default TabsExample;"
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
            <i className={'fa fa-bars'}/>
            &nbsp;Tabs<small>Float right</small>
          </h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <Tabs right>
            <Tab title={"Home"} active>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
            </Tab>
            <Tab title={"Profile"}>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip
            </Tab>
            <Tab title={"Messages"}>
              xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
            </Tab>
          </Tabs>
        </PanelBody>
      </Panel>
    );
  }
}

export default RightTabs;
