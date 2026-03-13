import { useState, useRef, useEffect } from 'react'
import { CheckIcon } from './icons'
import Badge from './Badge'
import './OptionMenu.css'

function OptionMenu({ trigger, children, align = 'left' }) {
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
    <div className="option-menu" ref={menuRef}>
      <div className="option-menu__trigger" onClick={() => setOpen(!open)}>
        {typeof trigger === 'function' ? trigger({ open }) : trigger}
      </div>
      {open && (
        <div className={`option-menu__dropdown ${align === 'right' ? 'option-menu__dropdown--right' : ''}`}>
          {children}
        </div>
      )}
    </div>
  )
}

function OptionMenuItem({ label, selected, onClick }) {
  return (
    <button
      className={`option-menu-item ${selected ? 'option-menu-item--selected' : ''}`}
      onClick={onClick}
    >
      <span className="option-menu-item__label">{label}</span>
      <span className="option-menu-item__check">
        {selected && <CheckIcon />}
      </span>
    </button>
  )
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const months = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december',
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function DossierOptionMenuItem({ name, startDate, endDate, active, status, badgeVariant = 'default', selected, onClick }) {
  const period = active
    ? `${formatDate(startDate)} - nu`
    : `${formatDate(startDate)} - ${formatDate(endDate)}`

  return (
    <button
      className={`option-menu-item option-menu-item--dossier ${selected ? 'option-menu-item--selected' : ''}`}
      onClick={onClick}
    >
      <div className="option-menu-item__content">
        <span className="option-menu-item__label">{name}</span>
        <span className="option-menu-item__period">{period}</span>
      </div>
      <Badge label={status} variant={badgeVariant} />
    </button>
  )
}

export { OptionMenu, OptionMenuItem, DossierOptionMenuItem }
