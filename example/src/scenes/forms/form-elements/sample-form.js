import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Panel, PanelBody, PanelHeader, Form, Field, ToggleButtonGroup, ToggleButtonOption } from 'react-gentelella';
import { Button, FormGroup, Grid, Row, Col } from 'react-bootstrap';
import GeneralPanelToolbox from '../../app/general-panel-toolbox';

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
  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Form design <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
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
                <Field name="firstName" label="First Name" required formProps={ props } />
                <Field name="lastName" label="Last Name" required formProps={ props } />
                <Field name="middleName" label="Middle Name / Initial" formProps={ props } />
                <ToggleButtonGroup required name="gender" label="Gender" formProps={ props }>
                  <ToggleButtonOption activeStyle={"primary"} value="male"> &nbsp; Male &nbsp; </ToggleButtonOption>
                  <ToggleButtonOption activeStyle={"primary"} value="female">Female</ToggleButtonOption>
                </ToggleButtonGroup>
                <Field name="dateOfBirth" label="DateOfBirth" required formProps={ props } />
                <hr/>
                <FormGroup>
                  <Grid>
                    <Row>
                      <Col xs={12} md={6} mdOffset={3} sm={6}>
                      <Button type="button" bsStyle="primary">Cancel</Button>
                      <Button onClick={ props.handleReset } type="reset" bsStyle="primary">Reset</Button>
                      <Button type="submit" bsStyle="success">Submit</Button>
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
