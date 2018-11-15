import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { capitalize } from '../../../utils/helpers'

const MENU_OPTIONS = [
  { name: 'create', icon: 'file alternate outline' },
  { name: 'preview', icon: 'eye' }
]

function Sidebar({ activeItem, handleView }) {
  return (
    <Menu vertical className="sidebar__container">
      <div className="sidebar__logo">
        Fuze<span className="sidebar__logo__bold">Form</span>
      </div>
      {MENU_OPTIONS.map(opt => (
        <Menu.Item
          className="sidebar__item"
          name={opt.name}
          key={opt.name}
          active={activeItem === opt.name}
          onClick={handleView}
        >
          <Icon name={opt.icon} />

          {capitalize(opt.name)}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Sidebar
