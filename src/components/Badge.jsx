import './Badge.css'

function Badge({ label, variant = 'default' }) {
  return (
    <span className={`badge badge--${variant}`}>
      {label}
    </span>
  )
}

export default Badge
