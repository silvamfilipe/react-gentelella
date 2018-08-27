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
import SideBarNestedMenu from "../src/menus/sidebar-nested-menu";
import PageTitle from "../src/layout-structure/page-title";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

stories.add('Basic layout', () => (
    <Gentelella fixedFooter={true}>
        <SideBar>
            <SideBarTitle />
            <ProfileQuickInfo name="Jane Doe"/>
            <SideBarMenu>
                <SideBarMenuSection label="General">
                    <SideBarNestedMenu label={ <Fragment><i className="fa fa-home"/> Home <span className="fa fa-chevron-down"/></Fragment>}>
                        <SideBarMenuItem><a href="javascript:">Dashboard 1</a></SideBarMenuItem>
                        <SideBarMenuItem><a href="javascript:">Dashboard 2</a></SideBarMenuItem>
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
            <PageTitle title={"Blank page"}/>
        </PageContent>

        <Footer>
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
        </Footer>
    </Gentelella>
));