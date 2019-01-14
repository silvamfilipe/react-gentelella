import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody, Form, Field, TextArea, Select, TagsField } from 'react-gentelella';
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
            initialValues={{defaultInput: '', dateOfBirth3: '', password: 'passwordonetwo', customSelect3: '', select3: '',
              selectGrouped3: '', selectMultiple3: [], tagsInput3: ['react', 'gentelella']}}
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
                <Select name="customSelect3" label="Select Custom" tabIndex="-1" formProps={ props }>
                  <option value="">&nbsp;</option>
                  <option value="AK">Alaska</option>
                  <option value="HI">Hawaii</option>
                  <option value="CA">California</option>
                  <option value="NV">Nevada</option>
                  <option value="OR">Oregon</option>
                  <option value="WA">Washington</option>
                  <option value="AZ">Arizona</option>
                  <option value="CO">Colorado</option>
                  <option value="ID">Idaho</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NM">New Mexico</option>
                  <option value="ND">North Dakota</option>
                  <option value="UT">Utah</option>
                  <option value="WY">Wyoming</option>
                  <option value="AR">Arkansas</option>
                  <option value="IL">Illinois</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="OK">Oklahoma</option>
                  <option value="SD">South Dakota</option>
                  <option value="TX">Texas</option>
                </Select>

                <Select label="Select Grouped" name="selectGrouped3" formProps={ props }>
                  <optgroup label="Alaskan/Hawaiian Time Zone">
                    <option value="AK">Alaska</option>
                    <option value="HI">Hawaii</option>
                  </optgroup>
                  <optgroup label="Pacific Time Zone">
                    <option value="CA">California</option>
                    <option value="NV">Nevada</option>
                    <option value="OR">Oregon</option>
                    <option value="WA">Washington</option>
                  </optgroup>
                  <optgroup label="Mountain Time Zone">
                    <option value="AZ">Arizona</option>
                    <option value="CO">Colorado</option>
                    <option value="ID">Idaho</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NM">New Mexico</option>
                    <option value="ND">North Dakota</option>
                    <option value="UT">Utah</option>
                    <option value="WY">Wyoming</option>
                  </optgroup>
                  <optgroup label="Central Time Zone">
                    <option value="AL">Alabama</option>
                    <option value="AR">Arkansas</option>
                    <option value="IL">Illinois</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="OK">Oklahoma</option>
                    <option value="SD">South Dakota</option>
                    <option value="TX">Texas</option>
                    <option value="TN">Tennessee</option>
                    <option value="WI">Wisconsin</option>
                  </optgroup>
                  <optgroup label="Eastern Time Zone">
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="IN">Indiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="OH">Ohio</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WV">West Virginia</option>
                  </optgroup>
                </Select>

                <Select name="selectMultiple3" multiple label={"Select Multiple"} formProps={ props }>
                  <option value="1">Choose option</option>
                  <option value="2">Option one</option>
                  <option value="3">Option two</option>
                  <option value="4">Option three</option>
                  <option value="5">Option four</option>
                  <option value="6">Option five</option>
                  <option value="7">Option six</option>
                </Select>

                <TagsField name="tagsInput3" label="Tags input" formProps={ props } />

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
