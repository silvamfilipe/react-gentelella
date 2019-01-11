import React from 'react';
import { Page, PageTitle } from 'react-gentelella';
import { Col, Grid, Row } from 'react-bootstrap';

import GlobalSearch from "../app/global-search";
import SampleForm from './form-elements/sample-form'
import FormFeedback from './form-elements/form-feedback'
import StarRatingExample from './form-elements/star-rating-example'
import FormBasicElements from './form-elements/form-basic-elements'

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
          <StarRatingExample/>
        </Col>
        <Col md={6} xs={12}>
          <FormBasicElements/>
        </Col>
      </Row>
    </Grid>
  </Page>
);

export default FormElements;
