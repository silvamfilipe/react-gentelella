import React from 'react';
import { Page, PageTitle, Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import GeneralPanelToolbox from '../app/general-panel-toolbox'
import { Clearfix, Label, Badge } from 'react-bootstrap'

const Typography = () => (
  <Page>
    <PageTitle title={'Typography'}>
      <GlobalSearch/>
    </PageTitle>
    <Panel>
      <PanelHeader>
        <h2>Typography <small>different design elements</small></h2>
        <GeneralPanelToolbox/>
      </PanelHeader>
      <PanelBody>
        <div className="col-md-8 col-lg-8 col-sm-7">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer
              posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>

          <blockquote className="blockquote-reverse">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer
              posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-5">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
        </div>
        <Clearfix/>

        <div className="col-md-12">
          <h4>Labels and badges</h4>
          <Label bsStyle="default">Default</Label>{' '}
          <Label bsStyle="primary">Primary</Label>{' '}
          <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{' '}
          <Label bsStyle="warning">Warning</Label>{' '}
          <Label bsStyle="danger">Danger</Label>{' '}
          <Badge>42</Badge>
        </div>
      </PanelBody>
    </Panel>
  </Page>
);

export default Typography;
