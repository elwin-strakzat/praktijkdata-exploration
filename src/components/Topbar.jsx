import Breadcrumb from './Breadcrumb'
import './Topbar.css'

function Topbar({ breadcrumbs, actions, children }) {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <Breadcrumb items={breadcrumbs} />
        {children}
      </div>
      {actions && <div className="topbar__actions">{actions}</div>}
    </div>
  )
}

export default Topbar
