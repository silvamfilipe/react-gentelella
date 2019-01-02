import React, { Component } from 'react';
import { Page, PageTitle, Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import GeneralPanelToolbox from '../app/general-panel-toolbox'
import { Clearfix, Label, Badge } from 'react-bootstrap'
import CodeSample from '../app/code-sample'
import Highlight from 'react-highlight'

class Typography extends Component {

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
            "import { Label, Badge } from 'react-bootstrap'\n" +
            "\n" +
            "const TypographyExample = () => (\n" +
            "  <div>\n" +
            "    <blockquote>\n" +
            "      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>\n" +
            "      <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n" +
            "    </blockquote>\n" +
            "  \n" +
            "    <blockquote className=\"blockquote-reverse\">\n" +
            "      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>\n" +
            "      <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n" +
            "    </blockquote>\n" +
            "\n" +
            "    <h1>h1. Bootstrap heading</h1>\n" +
            "    <h2>h2. Bootstrap heading</h2>\n" +
            "    <h3>h3. Bootstrap heading</h3>\n" +
            "\n" +
            "    <Label bsStyle=\"default\">Default</Label>\n" +
            "    <Label bsStyle=\"success\">Success</Label>\n" +
            "    <Label bsStyle=\"info\">Info</Label>\n" +
            "    <Label bsStyle=\"danger\">Danger</Label>\n" +
            "\n" +
            "    <Badge>42</Badge>\n" +
            "  </div>\n" +
            ");\n" +
            "\n" +
            "export default TypographyExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Page>
        <PageTitle title={'Typography'}>
          <GlobalSearch/>
        </PageTitle>
        <Panel>
          <PanelHeader>
            <h2>Typography <small>different design elements</small></h2>
            <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
          </PanelHeader>
          <PanelBody>
            { this.renderCodeSample() }
            <div className="col-md-8 col-lg-8 col-sm-7">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer
                  posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <blockquote className="blockquote-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer
                  posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-5">
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
            </div>
            <Clearfix/>

            <div className="col-md-12">
              <h4>Labels and badges</h4>
              <Label bsStyle="default">Default</Label>{' '}
              <Label bsStyle="primary">Primary</Label>{' '}
              <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{' '}
              <Label bsStyle="warning">Warning</Label>{' '}
              <Label bsStyle="danger">Danger</Label>{' '}
              <Badge>42</Badge>
            </div>
          </PanelBody>
        </Panel>
      </Page>
    );
  }
}

export default Typography;
