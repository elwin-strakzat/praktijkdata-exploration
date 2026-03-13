import Topbar from '../components/Topbar'

function Agenda() {
  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Agenda' }]} />
      <div className="canvas__content">
      </div>
    </>
  )
}

export default Agenda
