import React from 'react';
import { ButtonToolbar, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox';

const Tooltips = () => (
  <Panel>
    <PanelHeader>
      <h2>Popovers<small>Click to view</small></h2>
      <GeneralPanelToolbox/>
    </PanelHeader>
    <PanelBody>
      Hover over the links below to see tooltips:
      <ButtonToolbar>
        <OverlayTrigger placement="left" overlay={<Tooltip>Tooltip left</Tooltip>}>
          <Button bsStyle="default">Tooltip left</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip>Tooltip top</Tooltip>}>
          <Button bsStyle="default">Tooltip top</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Tooltip bottom</Tooltip>}>
          <Button bsStyle="default">Tooltip bottom</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={<Tooltip>Tooltip right</Tooltip>}>
          <Button bsStyle="default">Tooltip right</Button>
        </OverlayTrigger>

      </ButtonToolbar>
    </PanelBody>
  </Panel>
);

export default Tooltips;
