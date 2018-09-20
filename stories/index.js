import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';

import {
    Gentelella,
    PanelBody,
    SideBar,
    SideBarTitle,
    PanelHeader,
    Panel,
    PageTitle,
    Footer,
    PageContent,
    TopNavigation,
    ProfileQuickInfo,
    SideBarMenu,
    SideBarMenuSection,
    SideBarMenuItem,
    TopMenu,
    TopMenuItem, SideBarNestedMenu, DateTimePicker, Notification,
    Tabs, Tab
} from '../src';


import SearchWrapper from "./search-wrapper";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

const sideBar = (
    <SideBar>
        <SideBarTitle />
        <ProfileQuickInfo name="Jane Doe"/>
        <SideBarMenu>
            <SideBarMenuSection label="General">
                <SideBarMenuItem><a href="javascript:"> <i className="fa fa-home"/> Home</a></SideBarMenuItem>
                <SideBarNestedMenu label={<span><i className="fa fa-database"/> Databases</span>}>
                    <SideBarMenuItem><a>MySql</a></SideBarMenuItem>
                    <SideBarMenuItem><a>MongoDB</a></SideBarMenuItem>
                </SideBarNestedMenu>
            </SideBarMenuSection>
        </SideBarMenu>
    </SideBar>
);

const topNav = (
    <TopNavigation>
        <TopMenu >
            <TopMenuItem>
                <a href="javascript:"> Profile</a>
            </TopMenuItem>
            <TopMenuItem>
                <a href="javascript:">
                    <span className="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                </a>
            </TopMenuItem>
            <TopMenuItem>
                <a href="javascript:">Help</a>
            </TopMenuItem>
        </TopMenu>

    </TopNavigation>
);

const footer = (
    <Footer>
        Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
    </Footer>
);

stories.add('Basic layout', () => {
    return(
        <Gentelella fixedFooter={true} >
            { sideBar }

            { topNav }

            <PageContent>
                <PageTitle title={"Blank page"}>
                    <SearchWrapper/>
                </PageTitle>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <Panel>
                            <PanelHeader>
                                <h2>Plain page example</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"/></a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                           aria-expanded="false"><i className="fa fa-wrench"/></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Settings 1</a>
                                            </li>
                                            <li><a href="#">Settings 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="close-link"><i className="fa fa-close"/></a>
                                    </li>
                                </ul>
                            </PanelHeader>
                            <PanelBody>
                                This is an example body!
                            </PanelBody>
                        </Panel>
                    </div>
                </div>

            </PageContent>

            { footer }
        </Gentelella>
    );
});

const formStories = storiesOf('Advanced forms', module);
formStories.addDecorator(withKnobs);

formStories.add('Date Time Picker', () => (
    <Gentelella fixedFooter={true} >
        { sideBar }
        { topNav }
        <PageContent>
            <PageTitle title={"Advanced forms"}/>
            <Panel>
                <PanelHeader>
                    <h2>Date time picker</h2>
                </PanelHeader>
                <PanelBody>
                    <div className="container">
                        <div className="row">
                            <div className='col-sm-4'>
                                <DateTimePicker closeOnSelect={true} inputProps={{readOnly: true}} locale="pt"/>
                            </div>
                        </div>
                    </div>
                </PanelBody>
            </Panel>

        </PageContent>
        { footer }
    </Gentelella>
));

const uiElements = storiesOf('UI Elements', module);
uiElements.addDecorator(withKnobs);

uiElements.add('Notification', () => (
    <Gentelella fixedFooter={true} >
        { sideBar }
        { topNav }
        <PageContent>
            <PageTitle title={"UI Elements"}/>
            <Panel>
                <PanelHeader>
                    <h2>Notifications</h2>
                </PanelHeader>
                <PanelBody>
                    <Notification type="info" title="Sticky Success" text="Sticky success... I'm not even gonna make a joke."/>
                </PanelBody>
            </Panel>

        </PageContent>
        { footer }
    </Gentelella>

));


uiElements.add('Tabs', () => (
    <Gentelella fixedFooter={true} >
        { sideBar }
        { topNav }
        <PageContent>
            <PageTitle title={"UI Elements"}/>
            <Panel>
                <PanelHeader>
                    <h2>Tabs</h2>
                </PanelHeader>
                <PanelBody>
                    <Tabs>
                        <Tab title={<span>Home <i className="fa fa-home"/></span>} active>
                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
                        </Tab>
                        <Tab title="Profile">
                            Food truck sadgposjgoiasdjfsdajflksadfsdf  sdg sgd gasg asn four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
                        </Tab>
                    </Tabs>
                </PanelBody>
            </Panel>

        </PageContent>
        { footer }
    </Gentelella>

));

