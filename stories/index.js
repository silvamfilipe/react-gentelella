import React, {Fragment} from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';

import Gentelella from '../src';
import SideBar from "../src/layout-structure/sidebar";
import SideBarTitle from "../src/layout-structure/sidebar-title";
import ProfileQuickInfo from "../src/layout-structure/profile-quick-info";
import TopNavigation from "../src/layout-structure/top-navigation";
import TopMenu from "../src/menus/top-nav-menu";
import TopMenuItem from "../src/menus/top-nav-menu-item";
import PageContent from "../src/layout-structure/page-content";
import Footer from "../src/layout-structure/footer";
import SideBarMenu from "../src/menus/sidebar-menu";
import SideBarMenuSection from "../src/menus/sidebar-menu-section";
import SideBarMenuItem from "../src/menus/sidebar-menu-item";
import PageTitle from "../src/layout-structure/page-title";
import SearchWrapper from "./search-wrapper";
import Panel from "../src/layout-structure/panel";
import PanelHeader from "../src/layout-structure/panel-heder";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

stories.add('Basic layout', () => {
    let searchValue = '';

    return(
        <Gentelella fixedFooter={true}>
            <SideBar>
                <SideBarTitle />
                <ProfileQuickInfo name="Jane Doe"/>
                <SideBarMenu>
                    <SideBarMenuSection label="General">
                        <SideBarMenuItem><a href="javascript:"> <i className="fa fa-home"/> Home</a></SideBarMenuItem>
                        <SideBarMenuItem><a href="javascript:"> <i className="fa fa-database"/> Databases</a></SideBarMenuItem>
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
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                    </li>
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
