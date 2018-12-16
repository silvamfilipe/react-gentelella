import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap'

const SidebarFooterMenuItem = ({title, glyphIcon, onclick}) => {
  const tooltip = (
    <Tooltip id="tooltip">
      { title }
    </Tooltip>
  )

  return (
    <OverlayTrigger placement="top" overlay={ tooltip }>
      <a href='#' onClick={ e => { e.preventDefault(); onclick(e); } }>
        <Glyphicon glyph={ glyphIcon } />
      </a>
    </OverlayTrigger>
  )
}

SidebarFooterMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  glyphIcon: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
}

SidebarFooterMenuItem.defaultProps = {
  glyphIcon: 'cog',
  onclick: event => {}
}

export default SidebarFooterMenuItem;
