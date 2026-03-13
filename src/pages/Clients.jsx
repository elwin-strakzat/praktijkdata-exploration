import { useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Table from '../components/Table'
import { clients } from '../data/clients'

const columns = [
  { key: 'name', label: 'Naam' },
  { key: 'email', label: 'E-mail' },
  { key: 'phone', label: 'Telefoon' },
  { key: 'status', label: 'Status' },
]

function Clients() {
  const navigate = useNavigate()

  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Cliënten' }]} />
      <div className="canvas__content">
        <Table
          columns={columns}
          rows={clients}
          onRowClick={(row) => navigate(`/clienten/${row.id}`)}
        />
      </div>
    </>
  )
}

export default Clients
