import './NavItem.css'

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      className={`nav-item ${active ? 'nav-item--active' : ''}`}
      onClick={onClick}
    >
      <span className="nav-item__icon">{icon}</span>
      <span className="nav-item__label">{label}</span>
    </button>
  )
}

export default NavItem
