import React from 'react';
import { Page, PageTitle, PanelBody, Panel, PanelHeader } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import GeneralPanelToolbox from "../app/general-panel-toolbox";

const PlainPage = () => (
  <Page>
    <PageTitle title={"Plain Page"}>
        <GlobalSearch />
    </PageTitle>
      <Panel>
          <PanelHeader>
            <h2>Plain Page</h2>
              <GeneralPanelToolbox/>
          </PanelHeader>
          <PanelBody>
              Add content to the page ...
          </PanelBody>
      </Panel>
  </Page>
);

export default PlainPage;
