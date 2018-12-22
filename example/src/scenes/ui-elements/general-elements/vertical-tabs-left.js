import React from 'react';
import { Panel, PanelHeader, PanelBody, Tab, Tabs } from 'react-gentelella';
import GeneralPanelToolbox from "../../app/general-panel-toolbox";

const VerticalTabsLeft = () => (
    <Panel>
        <PanelHeader>
            <h2>
                <i className={'fa fa-bars'}/>
                &nbsp;Vertical Tabs<small>Float left</small>
            </h2>
            <GeneralPanelToolbox/>
        </PanelHeader>
        <PanelBody>
            <Tabs vertical>
                <Tab title={'Home'}>
                    <p className="lead">Home tab</p>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                        synth. Cosby sweater eu banh mi, qui irure terr.</p>
                </Tab>
                <Tab title={'Profile'}>
                    <p className="lead">Profile tab</p>
                </Tab>
                <Tab title={'Messages'}>
                    <p className="lead">Messages tab</p>
                </Tab>
                <Tab title={'Settings'}>
                    <p className="lead">Settings tab</p>
                </Tab>
            </Tabs>
        </PanelBody>
    </Panel>
);

export default VerticalTabsLeft;
