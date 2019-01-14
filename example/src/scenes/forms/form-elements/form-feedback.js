import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody, Field, Form } from 'react-gentelella';
import { Button, Col, FormGroup, Grid, Row } from 'react-bootstrap'
import { Formik } from 'formik';

import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class FormFeedback extends Component {

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
            "import { Button } from 'react-bootstrap';\n" +
            "import { Form, Field } from 'react-gentelella';\n" +
            "\n" +
            "const FormExample = () => (\n" +
            "  <Form onSubmit={ props.handleSubmit }>\n" +
            "    <Field \n" +
            "      name=\"name\"\n" +
            "      placeholder=\"User Name\"\n" +
            "      feedback={ <i className=\"fa fa-user left\"/> } />\n" +
            "      \n" +
            "    <Field\n" +
            "      name=\"email\"\n" +
            "      placeholder=\"E-mail Address\"\n" +
            "      feedbackPosition=\"right\"\n" +
            "      feedback={ <i className=\"fa fa-envelop right\"/> } />\n" +
            "      \n" +
            "    <Field\n" +
            "      name=\"defaultInput\"\n" +
            "      label=\"Default Input\"\n" +
            "      placeholder=\"Default Input\" />\n" +
            "      \n" +
            "    <Field name=\"disabled\" disabled label=\"Disabled\" placeholder=\"Disabled\" />\n" +
            "    <Field name=\"readOnlyt\" readOnly label=\"Read Only\" placeholder=\"Read Only\" />\n" +
            "    <hr/>\n" +
            "    <Button type=\"reset\" bsStyle=\"primary\">Reset</Button>\n" +
            "    <Button type=\"submit\" bsStyle=\"success\">Submit</Button>\n" +
            "  </Form>\n" +
            ");\n" +
            "\n" +
            "export default FormExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Input feedback <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <br/>
          <Formik
            initialValues={ {firstName1: '', lastName1: '', dateOfBirth1: '', email1:'', phone1:'', defaultInput1: ''} }
            onSubmit={ values => {
              console.log(values)
            }}
            render={ props => (
              <Form onSubmit={ props.handleSubmit }>
                <Grid>
                  <Row>
                    <Col md={6} sm={6} xs={12}>
                      <Field name="firstName1" formProps={ props } placeholder="First Name" feedback={<i className="fa fa-user left"/> }/>
                      <Field name="email1" formProps={ props } placeholder="Email" feedback={<i className="fa fa-envelope left"/> }/>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                      <Field name="lastName1" formProps={ props } placeholder="Last Name" feedbackPosition="right" feedback={<i className="fa fa-user right"/> }/>
                      <Field name="phone1" formProps={ props } placeholder="Phone" feedbackPosition="right" feedback={<i className="fa fa-phone right"/> }/>
                    </Col>
                  </Row>
                  <Row>
                    <Field name="defaultInput1" formProps={ props } label="Default Input" placeholder="Default Input" />
                    <Field name="disabledInput1" formProps={ props } disabled label="Disabled Input" placeholder="Disabled Input" />
                    <Field name="readOnlyInput1" formProps={ props } readOnly label="Read Only Input" placeholder="Read Only Input" />
                    <Field name="dateOfBirth1" label="Date Of Birth" required formProps={ props } />
                  </Row>
                </Grid>
                <hr />
                <FormGroup>
                  <Grid>
                    <Row>
                      <Col xs={12} md={6} mdOffset={3} sm={6}>
                        <Button type="button" bsStyle="primary">Cancel</Button>
                        <Button onClick={ props.handleReset } type="reset" bsStyle="primary">Reset</Button>
                        <Button type="submit" bsStyle="success" >Submit</Button>
                      </Col>
                    </Row>

                  </Grid>
                </FormGroup>
              </Form>
            )}
          />
        </PanelBody>
      </Panel>
    );
  }
}

export default FormFeedback;
