import Topbar from '../components/Topbar'

function Conversations() {
  return (
    <>
      <Topbar breadcrumbs={[{ label: 'Conversaties' }]} />
      <div className="canvas__content">
      </div>
    </>
  )
}

export default Conversations
