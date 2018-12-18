import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar as GtSidebarTitle, SidebarTitle, SidebarFooter, SidebarFooterMenuItem, ProfileQuickInfo,
  SidebarMenuSection, SidebarMenu, MenuItem, SidebarNestedMenu
} from 'react-gentelella';

const elem = document.documentElement;

const openFullscreen = () => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

const Sidebar = () => (
    <GtSidebarTitle>
        <SidebarTitle/>
        <ProfileQuickInfo name="Jane Doe" picture='https://randomuser.me/api/portraits/women/44.jpg' />
      <SidebarMenu>

        <SidebarMenuSection title={"Live On"}>
          <SidebarNestedMenu icon={'sitemap'} label={'Multilevel Menu'}>
            <MenuItem>
              <Link to={"/multilevel-menu/level-1"}>Level 1</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/multilevel-menu/level-1"}>Level 1</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/multilevel-menu/level-1"}>Level 1</Link>
            </MenuItem>

            <SidebarNestedMenu label={'More Levels'}>
              <MenuItem>
                <Link to={"/multilevel-menu/level-2"}>Level 2</Link>
              </MenuItem>

              <MenuItem>
                <Link to={"/multilevel-menu/level-2"}>Level 2</Link>
              </MenuItem>

              <MenuItem>
                <Link to={"/multilevel-menu/level-2"}>Level 2</Link>
              </MenuItem>
            </SidebarNestedMenu>

            <MenuItem>
              <Link to={"/multilevel-menu/level-1"}>Level 1</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/multilevel-menu/level-1"}>Level 1</Link>
            </MenuItem>

          </SidebarNestedMenu>
        </SidebarMenuSection>
      </SidebarMenu>
        <SidebarFooter>
            <SidebarFooterMenuItem title={'Settings'} />
            <SidebarFooterMenuItem onclick={ () => {openFullscreen()} } title={'FullScreen'} glyphIcon={'fullscreen'} />
            <SidebarFooterMenuItem title={'Lock'} glyphIcon={'eye-close'} />
            <SidebarFooterMenuItem title={'Logout'} glyphIcon={'off'} />
        </SidebarFooter>
    </GtSidebarTitle>
);

export default Sidebar;
