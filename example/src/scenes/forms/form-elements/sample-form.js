import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Panel, PanelBody, PanelHeader, Form, Field, ToggleButtonGroup, ToggleButtonOption } from 'react-gentelella';
import { Button, FormGroup, Grid, Row, Col } from 'react-bootstrap';
import GeneralPanelToolbox from '../../app/general-panel-toolbox';
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  dateOfBirth: Yup.string()
    .required('Required')
});

class SampleForm extends Component {

  state = {
    showCode: false
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <p>In this example we used <a rel="noopener noreferrer" href="https://jaredpalmer.com/formik" target="_blank">Formik</a>
          &nbsp;and <a rel="noopener noreferrer" href="https://github.com/jquense/yup" target="_blank">Yup</a> packages to handle
          form and validation.</p>
        <Highlight language="shell">
          {
            "# yarn add formik yup\n" +
            "or\n" +
            "# npm install formik yup --save\n"
          }
        </Highlight>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import { Formik } from 'formik';\n" +
            "import * as Yup from 'yup';\n" +
            "import { Button } from 'react-bootstrap';\n" +
            "import { Form, Field, ToggleButtonGroup, ToggleButtonOption } from 'react-gentelella';\n" +
            "\n" +
            "\n" +
            "const Schema = Yup.object().shape({\n" +
            "  firstName: Yup.string()\n" +
            "    .min(2, 'Too Short!')\n" +
            "    .max(50, 'Too Long!')\n" +
            "    .required('Required'),\n" +
            "  lastName: Yup.string()\n" +
            "    .min(2, 'Too Short!')\n" +
            "    .max(50, 'Too Long!')\n" +
            "    .required('Required'),\n" +
            "  gender: Yup.string()\n" +
            "    .required('Required')\n" +
            "});\n" +
            "\n" +
            "const FormExample = () => (\n" +
            "  <Formik\n" +
            "    validationSchema={ Schema }\n" +
            "    initialValues={ {firstName: 'John', lastName: ''} }\n" +
            "    onSubmit={ values => {\n" +
            "      console.log(values)\n" +
            "    }}\n" +
            "    render={\n" +
            "      props => (\n" +
            "        <Form onSubmit={ props.handleSubmit }>\n" +
            "          <Field name=\"firstName\" label=\"First Name\" layout=\"centered\" required formProps={ props } />\n" +
            "          <Field name=\"lastName\" label=\"Last Name\" layout=\"centered\" formProps={ props } />\n" +
            "          <ToggleButtonGroup required name=\"gender\" label=\"Gender\" formProps={ props }>\n" +
            "            <ToggleButtonOption activeStyle={\"primary\"} value=\"male\"> &nbsp; Male &nbsp; </ToggleButtonOption>\n" +
            "            <ToggleButtonOption activeStyle={\"primary\"} value=\"female\">Female</ToggleButtonOption>\n" +
            "          </ToggleButtonGroup>\n" +
            "          <hr/>\n" +
            "          <Button type=\"submit\" bsStyle=\"success\" disabled={!props.isValid}>Submit</Button>" +
            "          <Button onClick={ props.handleReset } type=\"reset\" bsStyle=\"primary\">Reset</Button>\n" +
            "        </Form>\n" +
            "      )\n" +
            "  }/>\n" +
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
          <h2>Form design <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <br />
          <Formik
            validationSchema={ Schema }
            initialValues={ {firstName: '', lastName: '', dateOfBirth: ''} }
            onSubmit={ values => {
              console.log(values)
            }}
            render={
            props => (
              <Form onSubmit={ props.handleSubmit }>
                <Field name="firstName" label="First Name" layout="centered" required formProps={ props } />
                <Field name="lastName" label="Last Name" layout="centered" required formProps={ props } />
                <Field name="middleName" label="Middle Name / Initial" layout="centered" formProps={ props } />
                <ToggleButtonGroup required name="gender" label="Gender" formProps={ props }>
                  <ToggleButtonOption activeStyle={"primary"} value="male"> &nbsp; Male &nbsp; </ToggleButtonOption>
                  <ToggleButtonOption activeStyle={"primary"} value="female">Female</ToggleButtonOption>
                </ToggleButtonGroup>
                <Field name="dateOfBirth" label="Date Of Birth" layout="centered" required formProps={ props } />
                <hr/>
                <FormGroup>
                  <Grid>
                    <Row>
                      <Col xs={12} md={6} mdOffset={3} sm={6}>
                      <Button type="button" bsStyle="primary">Cancel</Button>
                      <Button onClick={ props.handleReset } type="reset" bsStyle="primary">Reset</Button>
                      <Button type="submit" bsStyle="success" disabled={!props.isValid}>Submit</Button>
                      </Col>
                    </Row>
                  </Grid>
                </FormGroup>
              </Form>
            )
          } />

        </PanelBody>
      </Panel>
    );
  }
}

export default SampleForm;
