import { Link } from 'react-router-dom'
import './ConsultItem.css'

function ConsultItem({ name, time, to, color = 'var(--bg-brand-solid)' }) {
  const content = (
    <>
      <span className="consult-item__dot" style={{ background: color }} />
      <span className="consult-item__name">{name}</span>
      <span className="consult-item__time">{time}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="consult-item">
        {content}
      </Link>
    )
  }

  return (
    <div className="consult-item">
      {content}
    </div>
  )
}

export default ConsultItem
