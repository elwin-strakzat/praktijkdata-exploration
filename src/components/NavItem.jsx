import { NavLink } from 'react-router-dom'
import './NavItem.css'

function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
    >
      <span className="nav-item__icon">{icon}</span>
      <span className="nav-item__label">{label}</span>
    </NavLink>
  )
}

export default NavItem
