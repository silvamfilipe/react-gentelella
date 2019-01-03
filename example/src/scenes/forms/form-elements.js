import React from 'react';
import { Page, PageTitle } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import SampleForm from './form-elements/sample-form'

const FormElements = () => (
  <Page>
    <PageTitle title={'Form Elements'}>
      <GlobalSearch/>
    </PageTitle>

    <SampleForm/>
  </Page>
);

export default FormElements;
