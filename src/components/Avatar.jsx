import './Avatar.css'

function Avatar({ name, src, size = 'md' }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : '?'

  return (
    <span className={`avatar avatar--${size}`}>
      {src ? (
        <img className="avatar__image" src={src} alt={name} />
      ) : (
        <span className="avatar__initials">{initials}</span>
      )}
    </span>
  )
}

export default Avatar
