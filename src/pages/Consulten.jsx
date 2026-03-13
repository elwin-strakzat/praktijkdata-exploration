import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { CalendarIcon, MaximizeIcon, ClockIcon } from '../components/icons'
import { consults } from '../data/consults'
import './Consulten.css'

const months = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
]

const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function formatDay(dateStr) {
  const date = new Date(dateStr)
  return days[date.getDay()]
}

function Consulten() {
  const { id, dossierId } = useParams()
  const navigate = useNavigate()
  const dossierConsults = consults[dossierId] || []

  const today = new Date('2026-03-13')
  const upcoming = dossierConsults.find((c) => new Date(c.date) >= today)
  const past = dossierConsults.filter((c) => new Date(c.date) < today)

  const [notes, setNotes] = useState(upcoming?.notes || '')

  return (
    <div className="consulten">
      {upcoming && (
        <div className="consult-card">
          <div className="consult-card__header">
            <div className="consult-card__info">
              <div className="consult-card__title">
                <span className="consult-card__label">Volgend consult</span>
                <Badge label={upcoming.type} variant="brand" />
              </div>
              <div className="consult-card__meta">
                <span className="consult-card__date">
                  {formatDay(upcoming.date)}, {formatDate(upcoming.date)}
                </span>
                <span className="consult-card__time">
                  {upcoming.time} · {upcoming.duration} min
                </span>
              </div>
            </div>
            <div className="consult-card__actions">
              <Button
                icon={<CalendarIcon />}
                type="tertiary"
                ariaLabel="Tonen in agenda"
                onClick={() => navigate('/agenda')}
              />
              <Button
                icon={<MaximizeIcon />}
                type="tertiary"
                ariaLabel="Openen"
                onClick={() => navigate(`/clienten/${id}/${dossierId}/consulten/${upcoming.id}`)}
              />
            </div>
          </div>
          <textarea
            className="consult-card__notes"
            placeholder="Begin met typen om notities toe te voegen..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      )}

      {past.length > 0 && (
        <div className="consult-list">
          <h3 className="consult-list__title">Eerdere consulten</h3>
          <div className="consult-list__items">
            {past.map((consult) => (
              <button
                key={consult.id}
                className="consult-list-item"
                onClick={() => navigate(`/clienten/${id}/${dossierId}/consulten/${consult.id}`)}
              >
                <div className="consult-list-item__left">
                  <span className="consult-list-item__date">{formatDate(consult.date)}</span>
                  <span className="consult-list-item__type">{consult.type} · {consult.duration} min</span>
                </div>
                <div className="consult-list-item__right">
                  {consult.notes && (
                    <span className="consult-list-item__preview">
                      {consult.notes.length > 80 ? consult.notes.slice(0, 80) + '...' : consult.notes}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Consulten
