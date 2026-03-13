import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Topbar from '../components/Topbar'
import { OptionMenu, DossierOptionMenuItem } from '../components/OptionMenu'
import Button from '../components/Button'
import { ChevronRightIcon, ChevronDownIcon, InfoIcon, PlusIcon } from '../components/icons'
import { clients } from '../data/clients'
import './ClientDetail.css'

function getBadgeVariant(status) {
  switch (status) {
    case 'Actief': return 'success'
    case 'Afgerond': return 'default'
    case 'Wachtlijst': return 'warning'
    default: return 'default'
  }
}

function ClientDetail() {
  const { id } = useParams()
  const client = clients.find((c) => c.id === id)
  const [showDetails, setShowDetails] = useState(true)

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

  return (
    <>
      <Topbar
        breadcrumbs={[
          { label: 'Cliënten', to: '/clienten' },
          { label: client.name },
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
      >
        <span className="breadcrumb__separator">
          <ChevronRightIcon />
        </span>
        <OptionMenu
          trigger={
            <button className="breadcrumb__dropdown-trigger">
              <span className="breadcrumb__current">
                {selectedDossier?.name || 'Dossier'}
              </span>
              <span className="breadcrumb__dropdown-chevron">
                <ChevronDownIcon />
              </span>
            </button>
          }
        >
          {client.dossiers.map((d) => (
            <DossierOptionMenuItem
              key={d.id}
              name={d.name}
              startDate={d.startDate}
              endDate={d.endDate}
              active={d.active}
              status={d.status}
              badgeVariant={getBadgeVariant(d.status)}
              selected={d.id === selectedDossierId}
              onClick={() => setSelectedDossierId(d.id)}
            />
          ))}
          <div className="option-menu-divider" />
          <Button
            type="text"
            leadingIcon={<PlusIcon />}
            label="Dossier toevoegen"
          />
        </OptionMenu>
      </Topbar>
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
