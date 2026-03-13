import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Button from '../components/Button'
import { InfoIcon } from '../components/icons'
import { clients } from '../data/clients'
import './ClientDetail.css'

function ClientDetail() {
  const { id } = useParams()
  const client = clients.find((c) => c.id === id)
  const [showDetails, setShowDetails] = useState(false)

  const activeDossier = client?.dossiers.find((d) => d.active)
  const [selectedDossierId, setSelectedDossierId] = useState(activeDossier?.id)
  const selectedDossier = client?.dossiers.find((d) => d.id === selectedDossierId)

  if (!client) {
    return (
      <>
        <Topbar breadcrumbs={[
          { label: 'Cliënten', to: '/clienten' },
          { label: 'Niet gevonden' },
        ]} />
        <div className="canvas__content">
          <p>Cliënt niet gevonden.</p>
        </div>
      </>
    )
  }

  const dossierDropdown = client.dossiers.map((d) => ({
    value: d.id,
    label: d.name,
    onSelect: (value) => setSelectedDossierId(value),
  }))

  return (
    <>
      <Topbar
        breadcrumbs={[
          { label: 'Cliënten', to: '/clienten' },
          { label: client.name },
          { label: selectedDossier?.name || 'Dossier', dropdown: dossierDropdown },
        ]}
        actions={
          <Button
            icon={<InfoIcon />}
            type="tertiary"
            active={showDetails}
            ariaLabel="Details"
            onClick={() => setShowDetails(!showDetails)}
          />
        }
      />
      <div className="client-detail__body">
        <div className="canvas__content client-detail__content">
        </div>
        {showDetails && (
          <aside className="client-detail__sidebar">
            <h3 className="client-detail__sidebar-title">Details</h3>
            <div className="client-detail__fields">
              <div className="client-detail__field">
                <span className="client-detail__label">Naam</span>
                <span className="client-detail__value">{client.name}</span>
              </div>
              <div className="client-detail__field">
                <span className="client-detail__label">E-mail</span>
                <span className="client-detail__value">{client.email}</span>
              </div>
              <div className="client-detail__field">
                <span className="client-detail__label">Telefoon</span>
                <span className="client-detail__value">{client.phone}</span>
              </div>
              <div className="client-detail__field">
                <span className="client-detail__label">Status</span>
                <span className="client-detail__value">{client.status}</span>
              </div>
              <div className="client-detail__field">
                <span className="client-detail__label">Dossier</span>
                <span className="client-detail__value">{selectedDossier?.name}</span>
              </div>
            </div>
          </aside>
        )}
      </div>
    </>
  )
}

export default ClientDetail
