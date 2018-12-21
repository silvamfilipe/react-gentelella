import React from 'react';
import { Tabs, Tab, Panel, PanelHeader, PanelBody } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'

const RightTabs = () => (
  <Panel>
    <PanelHeader>
      <h2>
        <i className={'fa fa-bars'}/>
        &nbsp;Tabs<small>Float right</small>
      </h2>
      <GeneralPanelToolbox/>
    </PanelHeader>
    <PanelBody>
      <Tabs right>
        <Tab title={"Home"} active>
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
        </Tab>
        <Tab title={"Profile"}>
          Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip
        </Tab>
        <Tab title={"Profile"}>
          xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
        </Tab>
      </Tabs>
    </PanelBody>
  </Panel>
);

export default RightTabs;
