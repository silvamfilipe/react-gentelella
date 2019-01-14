import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody, Tab, Tabs } from 'react-gentelella';
import GeneralPanelToolbox from "../../app/general-panel-toolbox";
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class VerticalTabsLeft extends Component {

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
            "import { Tabs, Tab } from 'react-gentelella';\n\n" +
            "const TabsExample = () => (\n  <Tabs vertical>\n" +
            "    <Tab title={\"Home\"} active>\n" +
            "      <p className=\"lead\">Home tab</p>\n" +
            "      <p>Raw denim you probably haven't heard of them jean shorts...</p>\n" +
            "    </Tab>\n" +
            "    <Tab title={\"Profile\"}>\n" +
            "      <p className=\"lead\">Profile tab</p>\n" +
            "    </Tab>\n" +
            "    <Tab title={\"Messages\"}>\n" +
            "      <p className=\"lead\">Messages tab</p>\n" +
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
                &nbsp;Vertical Tabs<small>Float left</small>
              </h2>
              <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
            </PanelHeader>
            <PanelBody>
              { this.renderCodeSample() }
              <Tabs vertical>
                <Tab title={'Home'} active>
                  <p className="lead">Home tab</p>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth. Cosby sweater eu banh mi, qui irure terr.</p>
                </Tab>
                <Tab title={'Profile'}>
                  <p className="lead">Profile tab</p>
                </Tab>
                <Tab title={'Messages'}>
                  <p className="lead">Messages tab</p>
                </Tab>
                <Tab title={'Settings'}>
                  <p className="lead">Settings tab</p>
                </Tab>
              </Tabs>
            </PanelBody>
          </Panel>
        );
    }
}

export default VerticalTabsLeft;
