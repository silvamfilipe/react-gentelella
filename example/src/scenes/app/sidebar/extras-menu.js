import React from 'react';
import {Link} from "react-router-dom";
import { MenuItem, SidebarNestedMenu } from 'react-gentelella';

const ExtrasMenu = () => (
    <SidebarNestedMenu icon={'windows'} label={'Extras'}>
        <MenuItem>
            <Link to={"/extras/plain-page"}>Plain page</Link>
        </MenuItem>
    </SidebarNestedMenu>
);

export default ExtrasMenu;
