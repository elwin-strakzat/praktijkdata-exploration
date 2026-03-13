import { useState, useRef, useEffect } from 'react'
import './ActionMenu.css'

function ActionMenu({ trigger, children, align = 'left' }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="action-menu" ref={menuRef}>
      <div className="action-menu__trigger" onClick={() => setOpen(!open)}>
        {typeof trigger === 'function' ? trigger({ open }) : trigger}
      </div>
      {open && (
        <div className={`action-menu__dropdown ${align === 'right' ? 'action-menu__dropdown--right' : ''}`}>
          {children}
        </div>
      )}
    </div>
  )
}

function ActionMenuItem({ icon, label, variant, onClick }) {
  return (
    <button
      className={`action-menu-item ${variant === 'error' ? 'action-menu-item--error' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="action-menu-item__icon">{icon}</span>}
      <span className="action-menu-item__label">{label}</span>
    </button>
  )
}

function ActionMenuDivider() {
  return <div className="action-menu-divider" />
}

export { ActionMenu, ActionMenuItem, ActionMenuDivider }
