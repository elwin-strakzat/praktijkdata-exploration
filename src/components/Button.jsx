import './Button.css'

function Button({ icon, type = 'secondary', active = false, onClick, ariaLabel }) {
  return (
    <button
      className={`button button--${type} button--icon-only ${active ? 'button--active' : ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}

export default Button
