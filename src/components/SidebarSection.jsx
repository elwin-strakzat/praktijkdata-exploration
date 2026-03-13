import './SidebarSection.css'

function SidebarSection({ title, children }) {
  return (
    <div className="sidebar-section">
      {title && <div className="sidebar-section__title">{title}</div>}
      <div className="sidebar-section__content">{children}</div>
    </div>
  )
}

export default SidebarSection
