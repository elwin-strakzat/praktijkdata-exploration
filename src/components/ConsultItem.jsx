import './ConsultItem.css'

function ConsultItem({ name, time, color = 'var(--bg-brand-solid)' }) {
  return (
    <div className="consult-item">
      <span className="consult-item__dot" style={{ background: color }} />
      <span className="consult-item__name">{name}</span>
      <span className="consult-item__time">{time}</span>
    </div>
  )
}

export default ConsultItem
