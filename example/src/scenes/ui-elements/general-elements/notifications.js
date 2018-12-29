import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody, Notification } from 'react-gentelella';

import GeneralPanelToolbox from '../../app/general-panel-toolbox';
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class Notifications extends Component {

  state = {
    showCode: false,
    count: 0,
    type: 'info',
    dark: false,
    title: 'Oh! Snap!',
    text: 'This is a simple info!',
    show: false,
    hide: true,
    nonblock: false
  };

  renderNotification = () => {
    const { dark, show, count } = this.state;
    if (! show) return '';

    const darkClass = dark ? 'dark' : '';

    return (
      <Notification key={ count } addClass={darkClass} delay={5000} { ...this.state } />
    );
  }

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import { Notification } from 'react-gentelella';\n" +
            "\n" +
            "const NotificationExample = () => (\n" +
            "  <div>\n" +
            "    <Notification type=\"info\" title=\"New thing\" text=\"Simple info notification, shown for 3 seconds\" delay={ 3000 }/>\n" +
            "\n" +
            "    <Notification type=\"notice\" title=\"Warning!\" text=\"Sticky notice notification\" hide={false} />\n" +
            "\n" +
            "    <Notification addClass=\"dark\" title=\"Warning!\" text=\"Sticky dark notification\" hide={false} />\n" +
            "\n" +
            "    <Notification type=\"error\" nonblock={{nonblock: true}} title=\"Oh! No!\" text=\"Non blocking error notification\" />\n" +
            "\n" +
            "    <Notification type=\"success\" title=\"Success!\" text=\"Success notification\" />\n" +
            "  </div>\n" +
            ");\n" +
            "\n" +
            "export default NotificationExample;\n"
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
            <i className="fa fa-bell"/>&nbsp;
            Notifications
            <small>Styled & Custom notifications</small>
          </h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <p>Regular notifications</p>
          <ButtonToolbar>
            <Button onClick={() => this.setState({
              show: true,
              title:"Regular Success",
              text: "That thing that you were trying to do worked!",
              type:"success",
              count: this.state.count + 1,
              dark: false,
              hide: true,
              nonblock: false
            })}>Success</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"New Thing",
              text: "Just to let you know, something happened.",
              type:"info",
              count: this.state.count + 1,
              dark: false,
              hide: true,
              nonblock: false
            })}>Info</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"Regular Notice",
              text: "Check me out! I'm a notice.",
              type:"notice",
              count: this.state.count + 1,
              dark: false,
              hide: true,
              nonblock: false
            })}>Notice</Button>

          <Button onClick={() => this.setState({
              show: true,
              title:"Oh No!",
              text: "Something terrible happened.",
              type:"error",
              count: this.state.count + 1,
              dark: false,
            hide: true,
            nonblock: false
            })}>Error</Button>

          <Button onClick={() => this.setState({
            show: true,
            title:"Oh No!",
            text: "Something terrible happened.",
            type:"error",
            count: this.state.count + 1,
            dark: true,
            hide: true,
            nonblock: false
          })}>Dark</Button>
        </ButtonToolbar>
        <br/>&nbsp;
          <p>Sticky notifications.. these wont close unless user closes them.</p>
          <ButtonToolbar>
            <Button onClick={() => this.setState({
              show: true,
              title:"Regular Success",
              text: "That thing that you were trying to do worked!",
              type:"success",
              count: this.state.count + 1,
              dark: false,
              hide: false,
              nonblock: false
            })}>Success</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"New Thing",
              text: "Just to let you know, something happened.",
              type:"info",
              count: this.state.count + 1,
              dark: false,
              hide: false,
              nonblock: false
            })}>Info</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"Regular Notice",
              text: "Check me out! I'm a notice.",
              type:"notice",
              count: this.state.count + 1,
              dark: false,
              hide: false,
              nonblock: false
            })}>Notice</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"Oh No!",
              text: "Something terrible happened.",
              type:"error",
              count: this.state.count + 1,
              dark: false,
              hide: false,
              nonblock: false
            })}>Error</Button>

            <Button onClick={() => this.setState({
              show: true,
              title:"Oh No!",
              text: "Something terrible happened.",
              type:"error",
              count: this.state.count + 1,
              dark: true,
              hide: false,
              nonblock: false
            })}>Dark</Button>
          </ButtonToolbar>
          <hr/>
          <Button onClick={() => this.setState({
            show: true,
            title:"Non-Blocking Notice",
            text: "When you hover over me I'll fade to show the elements underneath. Feel free to click any of them just like I wasn't even here.",
            type:"notice",
            count: this.state.count + 1,
            dark: true,
            hide: true,
            nonblock: {nonblock: true}
          })}>Non-Blocking Notice</Button>
          { this.renderNotification() }

        </PanelBody>
      </Panel>
    );
  }
}

export default Notifications;
