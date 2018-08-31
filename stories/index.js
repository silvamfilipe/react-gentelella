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
    TopMenuItem, SideBarNestedMenu
} from '../src';


import SearchWrapper from "./search-wrapper";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

stories.add('Basic layout', () => {
    return(
        <Gentelella fixedFooter={true} >
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

            <Footer>
                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
            </Footer>
        </Gentelella>
    );
});
