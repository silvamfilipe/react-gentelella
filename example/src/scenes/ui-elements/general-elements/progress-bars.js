import React, { Component } from 'react';
import { Panel, PanelBody, PanelHeader, Progress } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class ProgressBars extends Component {

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
            "import { Progress } from 'react-gentelella';\n" +
            "\n" +
            "const ProgressExample = () => (\n" +
            "  <Progress now={25} type=\"danger\" placement=\"right\" />\n" +
            "  <Progress now={45} type=\"warning\" placement=\"bottom\" vertical wide />\n" +
            "  <Progress now={65} type=\"info\" placement=\"right\" striped active />\n" +
            "  <Progress now={95} type=\"success\">95% done...</Progress>\n" +
            ");\n" +
            "\n" +
            "export default ProgressExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2><i className="fa fa-align-left"/>&nbsp;Progress bars</h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <p>Bootstrap progress bar with animated loading bar, add right to .progress to align right</p>
          <div className="row">
            <div className="col-md-6">
              <Progress now={25} type="danger" placement="right" />
              <Progress now={45} type="warning" placement="right" />
              <Progress now={65} type="info" placement="right" />
              <Progress now={95} type="success" placement="right">95% done...</Progress>
            </div>
            <div className="col-md-6">
              <Progress now={25} type="danger" />
              <Progress now={45} type="warning" />
              <Progress now={65} type="info" striped active />
              <Progress now={95} type="success" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul className="verticle_bars list-inline">
                <li><Progress now={25} type="danger" striped placement="bottom" vertical wide /></li>
                <li><Progress now={45} type="warning" striped placement="bottom" vertical wide>45%</Progress></li>
                <li><Progress now={65} type="info" placement="bottom" vertical wide /></li>
                <li><Progress now={95} type="success" placement="bottom" vertical wide /></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="verticle_bars list-inline">
                <li><Progress now={95} type="success" placement="bottom" vertical /></li>
                <li><Progress now={65} type="info" placement="bottom" vertical /></li>
                <li><Progress now={45} type="warning" placement="bottom" vertical /></li>
                <li><Progress now={25} type="danger" placement="bottom" vertical /></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul className="verticle_bars list-inline">
                <li><Progress now={25} type="danger" striped vertical wide /></li>
                <li><Progress now={45} type="warning" striped vertical wide /></li>
                <li><Progress now={65} type="info" vertical wide /></li>
                <li><Progress now={95} type="success" vertical wide /></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="verticle_bars list-inline">
                <li><Progress now={95} type="success" vertical /></li>
                <li><Progress now={65} type="info" vertical /></li>
                <li><Progress now={45} type="warning" vertical /></li>
                <li><Progress now={25} type="danger" vertical /></li>
              </ul>
            </div>
          </div>
        </PanelBody>
      </Panel>
    );
  }
}

export default ProgressBars;
