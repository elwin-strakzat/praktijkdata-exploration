import { Navigate, useParams } from 'react-router-dom'
import { clients } from '../data/clients'

function ClientRedirect() {
  const { id } = useParams()
  const client = clients.find((c) => c.id === id)
  const activeDossier = client?.dossiers.find((d) => d.active) || client?.dossiers[0]

  if (!client || !activeDossier) {
    return <Navigate to="/clienten" replace />
  }

  return <Navigate to={`/clienten/${id}/${activeDossier.id}/consulten`} replace />
}

export default ClientRedirect
