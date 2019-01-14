import React from 'react';
import {Link} from "react-router-dom";
import { MenuItem, SidebarNestedMenu } from 'react-gentelella';

const FormsMenu = () => (
  <SidebarNestedMenu icon={'edit'} label={'Forms'}>
    <MenuItem>
      <Link to={"/forms/general-form"}>General Form</Link>
    </MenuItem>
  </SidebarNestedMenu>
);

export default FormsMenu;
