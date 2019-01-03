import React, { Component } from 'react';
import { Panel, PanelBody, PanelHeader, Form, Field } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'

class SampleForm extends Component {
  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Form design <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          <Form initialValues={ {firstName: null} }>
            <Field name="firstName" label="First Name" required />
            <Field name="lastName" label="last Name" required />
          </Form>
        </PanelBody>
      </Panel>
    );
  }
}

export default SampleForm;
