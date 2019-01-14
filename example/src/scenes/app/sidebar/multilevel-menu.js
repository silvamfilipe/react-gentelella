import React from 'react';
import {Link} from "react-router-dom";
import { MenuItem, SidebarNestedMenu } from 'react-gentelella';

const MultilevelMenu = () => (
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
);

export default MultilevelMenu;
