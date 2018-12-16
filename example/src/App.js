import React, { Component } from 'react'

import {
  Gentelella, BaseTheme, Sidebar, SidebarTitle, SidebarFooter,
  SidebarFooterMenuItem, TopNavigation, TopMenu
} from 'react-gentelella'

export default class App extends Component {
  render () {
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

            </TopMenu>
          </TopNavigation>

        </Gentelella>
      </div>
    )
  }
}
