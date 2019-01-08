import React from 'react';
import { Page, PageTitle } from 'react-gentelella';
import { Col, Grid, Row } from 'react-bootstrap';

import GlobalSearch from "../app/global-search";
import SampleForm from './form-elements/sample-form'
import FormFeedback from './form-elements/form-feedback'

const FormElements = () => (
  <Page>
    <PageTitle title={'Form Elements'}>
      <GlobalSearch/>
    </PageTitle>
    <SampleForm/>
    <Grid>
      <Row>
        <Col md={6} xs={12}>
          <FormFeedback/>
        </Col>
      </Row>
    </Grid>
  </Page>
);

export default FormElements;
