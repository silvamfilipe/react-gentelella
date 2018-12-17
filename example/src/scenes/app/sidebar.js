import React from 'react';
import { Sidebar as GtSidebarTitle, SidebarTitle, SidebarFooter, SidebarFooterMenuItem, ProfileQuickInfo } from 'react-gentelella';

const Sidebar = () => (
    <GtSidebarTitle>
        <SidebarTitle/>
        <SidebarFooter>
            <SidebarFooterMenuItem title={'Settings'} />
            <SidebarFooterMenuItem title={'FullScreen'} glyphIcon={'fullscreen'} />
            <SidebarFooterMenuItem title={'Lock'} glyphIcon={'eye-close'} />
            <SidebarFooterMenuItem title={'Logout'} glyphIcon={'off'} />
        </SidebarFooter>

        <ProfileQuickInfo name="Jane Doe" picture='https://randomuser.me/api/portraits/women/44.jpg' />
    </GtSidebarTitle>
);

export default Sidebar;
