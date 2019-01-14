import React from 'react';
import Badge from "react-bootstrap/es/Badge";
import { TopUserMenu, MenuItem } from 'react-gentelella';

const picture = <img src="https://randomuser.me/api/portraits/women/44.jpg" alt=""/>;

const UserMenu = () => (
    <TopUserMenu name='Jane Doe' picture={ picture }>
        <MenuItem>
            <a href="/"> Profile</a>
        </MenuItem>
        <MenuItem>
            <a href="/">
                <Badge bsClass='badge bg-red pull-right'>50%</Badge>
                <span>Settings</span>
            </a>
        </MenuItem>
        <MenuItem>
            <a href="/">Help</a>
        </MenuItem>
        <MenuItem>
            <a href="/"><i className="fa fa-sign-out pull-right"/>&nbsp;Log Out</a>
        </MenuItem>
    </TopUserMenu>
);

export default UserMenu;
