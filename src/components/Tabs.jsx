import { NavLink } from 'react-router-dom'
import './Tabs.css'

function Tabs({ children }) {
  return (
    <nav className="tabs">
      {children}
    </nav>
  )
}

function TabItem({ label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `tab-item ${isActive ? 'tab-item--active' : ''}`}
    >
      {label}
    </NavLink>
  )
}

export { Tabs, TabItem }
