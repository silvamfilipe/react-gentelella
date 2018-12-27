import React, { Component } from 'react';
import { Page, PageTitle, PanelBody, Panel, PanelHeader } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import GeneralPanelToolbox from "../app/general-panel-toolbox";
import CodeSample from '../app/code-sample'
import Highlight from 'react-highlight'

class PlainPage extends Component {

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
          "import { Page, PageTitle, PanelBody, Panel, PanelHeader } from 'react-gentelella';\n\n" +
          "const PageExample = () => (\n  <Page>\n" +
          "    <PageTitle title={\"Plain Page\"}/>\n" +
          "    <Panel>\n" +
          "      <PanelHeader>\n" +
          "        <h2>Plain Page</h2>\n" +
          "      </PanelHeader>\n" +
          "      <PanelBody>\n" +
          "        Add content to the page ...\n" +
          "      </PanelBody>\n" +
          "    </Panel>\n" +
          "  </Page>\n);\n\n" +
          "export default PageExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Page>
        <PageTitle title={"Plain Page"}>
          <GlobalSearch />
        </PageTitle>
        <Panel>
          <PanelHeader>
            <h2>Plain Page</h2>
            <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
          </PanelHeader>
          <PanelBody>
            { this.renderCodeSample() }
            Add content to the page ...
          </PanelBody>
        </Panel>
      </Page>
    );
  }
}

export default PlainPage;
