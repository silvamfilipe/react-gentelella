import React from 'react';
import { TopNavigation, TopMenu } from 'react-gentelella';

import UserMenu from "./head-nav/user-menu";
import MessagesMenu from "./head-nav/messages-menu";

const HeadNav = () => (
    <TopNavigation>
        <TopMenu>
            <UserMenu />
            <MessagesMenu/>
        </TopMenu>
    </TopNavigation>
);

export default HeadNav;
