import './Button.css'

function Button({ icon, type = 'secondary', onClick, ariaLabel }) {
  return (
    <button
      className={`button button--${type} button--icon-only`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}

export default Button
