import React, { Component } from 'react'

import {
  Gentelella, BaseTheme, Sidebar, SidebarTitle, SidebarFooter,
  SidebarFooterMenuItem, TopNavigation, TopMenu, TopUserMenu, MenuItem
} from 'react-gentelella'
import Badge from 'react-bootstrap/es/Badge'


export default class App extends Component {

  render () {

    const picture = <img src="https://randomuser.me/api/portraits/women/26.jpg" alt=""/>

    return (
      <div>
        <BaseTheme/>
        <Gentelella>
          <Sidebar>
            <SidebarTitle/>
            <SidebarFooter>
              <SidebarFooterMenuItem title={'Settings'} />
              <SidebarFooterMenuItem title={'FullScreen'} glyphIcon={'fullscreen'} />
              <SidebarFooterMenuItem title={'Lock'} glyphIcon={'eye-close'} />
              <SidebarFooterMenuItem title={'Logout'} glyphIcon={'off'} />
            </SidebarFooter>
          </Sidebar>

          <TopNavigation>
            <TopMenu>
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
                  <a href="/"><i className="fa fa-sign-out pull-right"/>&mnsp;Log Out</a>
                </MenuItem>
              </TopUserMenu>
            </TopMenu>
          </TopNavigation>

        </Gentelella>
      </div>
    )
  }
}
