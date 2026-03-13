import Breadcrumb from './Breadcrumb'
import './Topbar.css'

function Topbar({ breadcrumbs, actions }) {
  return (
    <div className="topbar">
      <Breadcrumb items={breadcrumbs} />
      {actions && <div className="topbar__actions">{actions}</div>}
    </div>
  )
}

export default Topbar
