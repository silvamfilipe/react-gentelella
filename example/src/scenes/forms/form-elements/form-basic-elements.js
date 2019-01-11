import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody, Form, Field, TextArea, Select } from 'react-gentelella';
import { Formik } from 'formik';
import { Button, Col, FormGroup, Grid, Row } from 'react-bootstrap';

import GeneralPanelToolbox from '../../app/general-panel-toolbox';

class FormBasicElements extends Component {

  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Form Basic Elements <small>different form elements</small></h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          <br/>
          <Formik
            onSubmit={ values => console.log(values) }
            initialValues={{defaultInput: '', dateOfBirth3: '', password: 'passwordonetwo'}}
            render={props => (
              <Form onSubmit={ props.handleSubmit }>
                <Field name="defaultInput3" label="Default Input" formProps={ props } placeholder="Default input" />
                <Field name="disabledInput3" disabled label="Disabled Input" placeholder="Disabled input" />
                <Field name="readOnlyInput3" readOnly label="Read-Only Input" placeholder="Read-Only input" />
                <TextArea name="dateOfBirth3" required label="Date Of Birth" placeholder="rows=3" formProps={props}/>
                <Field type="password" name="password" label="Password" formProps={ props } />
                <Select name="select3" label="select" formProps={ props }>
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </Select>
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
            )}
          />
        </PanelBody>
      </Panel>
    );
  }
}

export default FormBasicElements;
