import { Link } from 'react-router-dom'
import { ChevronRightIcon, ChevronDownIcon } from './icons'
import { OptionMenu, OptionMenuItem } from './OptionMenu'
import './Breadcrumb.css'

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="breadcrumb__item">
            {index > 0 && (
              <span className="breadcrumb__separator">
                <ChevronRightIcon />
              </span>
            )}
            {item.dropdown ? (
              <OptionMenu
                trigger={
                  <button className="breadcrumb__dropdown-trigger">
                    <span className={isLast ? 'breadcrumb__current' : 'breadcrumb__link'}>
                      {item.label}
                    </span>
                    <span className="breadcrumb__dropdown-chevron">
                      <ChevronDownIcon />
                    </span>
                  </button>
                }
              >
                {item.dropdown.map((option) => (
                  <OptionMenuItem
                    key={option.value}
                    label={option.label}
                    selected={option.selected}
                    onClick={() => option.onSelect?.(option.value)}
                  />
                ))}
              </OptionMenu>
            ) : isLast ? (
              <span className="breadcrumb__current">{item.label}</span>
            ) : (
              <Link className="breadcrumb__link" to={item.to}>
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
