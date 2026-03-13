import './Button.css'

function Button({ icon, label, leadingIcon, trailingIcon, type = 'secondary', active = false, onClick, ariaLabel }) {
  const isIconOnly = icon && !label

  return (
    <button
      className={`button button--${type} ${isIconOnly ? 'button--icon-only' : 'button--default'} ${active ? 'button--active' : ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {leadingIcon && <span className="button__icon">{leadingIcon}</span>}
          {label && <span className="button__label">{label}</span>}
          {trailingIcon && <span className="button__icon">{trailingIcon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
