import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar as GtSidebarTitle, SidebarTitle, SidebarFooter, SidebarFooterMenuItem, ProfileQuickInfo,
  SidebarMenuSection, SidebarMenu, MenuItem, SidebarNestedMenu
} from 'react-gentelella';

const Sidebar = () => (
    <GtSidebarTitle>
        <SidebarTitle/>
        <ProfileQuickInfo name="Jane Doe" picture='https://randomuser.me/api/portraits/women/44.jpg' />
      <SidebarMenu>
        <SidebarMenuSection title={"General"}>
          <SidebarNestedMenu icon={'home'} label={'Home'}>
          <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
          </MenuItem>

          <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
          </MenuItem>

          <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
          </MenuItem>

          <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
          </MenuItem>

          <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
          </MenuItem>
          </SidebarNestedMenu>
        </SidebarMenuSection>

        <SidebarMenuSection title={"Live On"}>
          <SidebarNestedMenu icon={'windows'} label={'Extras'}>
            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>

            <MenuItem>
              <Link to={"/extras/plain-page"}>Plain page</Link>
            </MenuItem>
          </SidebarNestedMenu>
        </SidebarMenuSection>
      </SidebarMenu>
        <SidebarFooter>
            <SidebarFooterMenuItem title={'Settings'} />
            <SidebarFooterMenuItem title={'FullScreen'} glyphIcon={'fullscreen'} />
            <SidebarFooterMenuItem title={'Lock'} glyphIcon={'eye-close'} />
            <SidebarFooterMenuItem title={'Logout'} glyphIcon={'off'} />
        </SidebarFooter>
    </GtSidebarTitle>
);

export default Sidebar;
