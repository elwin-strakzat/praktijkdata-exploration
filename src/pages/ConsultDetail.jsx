import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Badge from '../components/Badge'
import Avatar from '../components/Avatar'
import { consults } from '../data/consults'
import { clients } from '../data/clients'
import './ConsultDetail.css'

const months = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
]

const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
const daysShort = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function formatDateShort(dateStr, time) {
  const date = new Date(dateStr)
  return `${daysShort[date.getDay()]} ${date.getDate()} ${monthsShort[date.getMonth()]} ${date.getFullYear()} ${time}`
}

function ConsultDetail() {
  const { id, dossierId, consultId } = useParams()
  const client = clients.find((c) => c.id === id)
  const selectedDossier = client?.dossiers.find((d) => d.id === dossierId)
  const dossierConsults = consults[dossierId] || []
  const consult = dossierConsults.find((c) => c.id === consultId)

  const [notes, setNotes] = useState(consult?.notes || '')

  if (!consult) {
    return (
      <>
        <Topbar breadcrumbs={[
          { label: 'Cliënten', to: '/clienten' },
          { label: 'Consult niet gevonden' },
        ]} />
        <div className="canvas__content">
          <p>Consult niet gevonden.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Topbar breadcrumbs={[
        { label: 'Cliënten', to: '/clienten' },
        { label: client?.name, to: `/clienten/${id}/${dossierId}/consulten` },
        { label: selectedDossier?.name, to: `/clienten/${id}/${dossierId}/consulten` },
        { label: 'Consulten', to: `/clienten/${id}/${dossierId}/consulten` },
        { label: formatDateShort(consult.date, consult.time) },
      ]} />
      <div className="canvas__content consult-detail">
        <div className="consult-detail__page">
          <div className="consult-detail__header">
            <div className="consult-detail__title">
              <h2 className="consult-detail__heading">
                {formatDate(consult.date)}, {consult.time}
              </h2>
              <Badge label={consult.type} variant="brand" />
            </div>
            <span className="consult-detail__duration">{consult.duration} minuten</span>
            <div className="consult-detail__client">
              <Avatar name={client?.name} size="sm" />
              <span className="consult-detail__client-name">{client?.name}</span>
            </div>
          </div>
          <textarea
            className="consult-detail__notes"
            placeholder="Begin met typen om notities toe te voegen..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default ConsultDetail
