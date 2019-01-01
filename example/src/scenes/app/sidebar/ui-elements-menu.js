import React from 'react';
import {Link} from "react-router-dom";
import { MenuItem, SidebarNestedMenu } from 'react-gentelella';

const UiElements = () => (
    <SidebarNestedMenu icon={'desktop'} label={'UI Elements'}>
        <MenuItem>
            <Link to={"/ui-elements/general-elements"}>General Elements</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/ui-elements/typography"}>Typography</Link>
        </MenuItem>
    </SidebarNestedMenu>
);

export default UiElements;
