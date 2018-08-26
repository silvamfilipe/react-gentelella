import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';

import Gentelella from '../src';
import SideBar from "../src/layout-structure/sidebar";
import SideBarTitle from "../src/layout-structure/sidebar-title";
import ProfileQuickInfo from "../src/layout-structure/profile-quick-info";
import TopNavigation from "../src/layout-structure/top-navigation";
import TopMenu from "../src/menus/top-nav-menu";
import TopMenuItem from "../src/menus/top-nav-menu-item";

const stories = storiesOf('Main components', module);

stories.addDecorator(withKnobs);

stories.add('Blank page', () => (
    <Gentelella>
        <SideBar>
            <SideBarTitle />
            <ProfileQuickInfo name="Jane Doe"/>
        </SideBar>

        <TopNavigation>
            <TopMenu>
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
    </Gentelella>
));